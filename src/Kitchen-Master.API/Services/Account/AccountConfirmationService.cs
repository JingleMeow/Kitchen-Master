using Kitchen_Master.API.ConfigOptions;
using Kitchen_Master.API.Email;
using Kitchen_Master.DataModel;
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
    public class AccountConfirmationService : IFeatureService
    {
        private readonly KitchenMasterDbContext context;
        private readonly UserManager<KmUser> userManager;
        private readonly IConfiguration configuration;
        private readonly AccountConfirmationEmailSender emailSender;
        private readonly EmailOptions options;

        public AccountConfirmationService(KitchenMasterDbContext context,
            UserManager<KmUser> userManager,
            IConfiguration configuration,
            IOptions<EmailOptions> options,
            AccountConfirmationEmailSender emailSender)
        {
            this.context = context;
            this.userManager = userManager;
            this.configuration = configuration;
            this.emailSender = emailSender;
            this.options = options.Value;
        }

        public async Task SendAccountConfirmationEmail(KmUser user)
        {
            this.emailSender.To = user.Email;
            this.emailSender.ConfirmationToken = await userManager.GenerateEmailConfirmationTokenAsync(user);
            this.emailSender.SendEmail();
        }
    }
}
