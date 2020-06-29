using Kitchen_Master.API.ConfigOptions;
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
    public class UserConfirmationService : IFeatureService
    {
        private readonly KitchenMasterDbContext context;
        private readonly UserManager<KmUser> userManager;
        private readonly EmailService emailService;
        private readonly IConfiguration configuration;
        private readonly EmailOptions options;

        public UserConfirmationService(KitchenMasterDbContext context,
            UserManager<KmUser> userManager,
            EmailService emailService,
            IConfiguration configuration,
            IOptions<EmailOptions> options)
        {
            this.context = context;
            this.userManager = userManager;
            this.emailService = emailService;
            this.configuration = configuration;
            this.options = options.Value;
        }

        public async Task RequestConfirmation(KmUser user)
        {
            var mail = await this.GenerateUserConfirmationMail(user);
            emailService.SendEmail(mail);
        }

        private async Task<MimeMessage> GenerateUserConfirmationMail(KmUser user)
        {
            string code = await userManager.GenerateEmailConfirmationTokenAsync(user);
            var message = new MimeMessage();
            message.From.Add(MailboxAddress.Parse(this.options.OperationsEmail));
            message.To.Add(MailboxAddress.Parse(user.Email));
            message.Subject = "Please confirm your Email";
            message.Body = new TextPart("plain")
            {
                Text = $"Please click the following link." +
                $"{this.configuration.GetValue<string>("ClientUrl")}/confirmEmail/{code}"
            };
            return message;
        }
    }
}
