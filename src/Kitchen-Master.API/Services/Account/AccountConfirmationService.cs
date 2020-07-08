using Kitchen_Master.API.ApiModels.Account;
using Kitchen_Master.API.ConfigOptions;
using Kitchen_Master.API.Email;
using Kitchen_Master.Data;
using Kitchen_Master.Data.Model;
using Kitchen_Master.DataModel.Repository;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.Services.Account
{
    public class AccountConfirmationService : UnitOfWorkService, IFeatureService
    {
        private readonly UserRepository userRepository;
        private readonly UserManager<KmUser> userManager;
        private readonly IConfiguration configuration;
        private readonly AccountConfirmationEmailSender emailSender;
        private readonly EmailOptions options;

        public AccountConfirmationService(
            KitchenMasterDbContext dbContext,
            UserRepository userRepository,
            UserManager<KmUser> userManager,
            IConfiguration configuration,
            IOptions<EmailOptions> options,
            AccountConfirmationEmailSender emailSender)
            : base(dbContext)
        {
            this.userRepository = userRepository;
            this.userManager = userManager;
            this.configuration = configuration;
            this.emailSender = emailSender;
            this.options = options.Value;
        }

        public async Task SendAccountConfirmationEmail(KmUser user)
        {
            var token = await userManager.GenerateEmailConfirmationTokenAsync(user);
            this.emailSender.To = user.Email;
            this.emailSender.ConfirmationToken = token;
            this.emailSender.SendEmail();
        }

        public async Task ConfirmEmail(AccountConfirmationModel model)
        {
            var user = this.userRepository.GetUserByEmail(model.Email);
            if (user == null)
                throw new FeatureServiceException("Invalid email.");

            var result = await userManager.ConfirmEmailAsync(user, model.Token);
            if (!result.Succeeded)
                throw new FeatureServiceException("Cannot confirm this email.");

            // update user
            user.FirstName = model.FirstName;
            user.LastName = model.LastName;
            this.SaveChanges();
        }
    }
}
