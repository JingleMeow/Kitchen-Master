using Kitchen_Master.API.Email.EmailBuilder;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.Email
{
    public class AccountConfirmationEmailSender : EmailSender
    {
        private readonly new ActionlessEmailBuilder emailBuilder;
        private readonly IConfiguration configuration;

        public AccountConfirmationEmailSender(EmailService emailService,
            ActionlessEmailBuilder emailBuilder,
            IConfiguration configuration)
            : base(emailService, emailBuilder)
        {
            this.emailBuilder = emailBuilder;
            this.configuration = configuration;
        }

        public string To { get; set; }
        public string ConfirmationToken { get; set; }

        protected override void SetupEmailBuilder()
        {
            this.emailBuilder.From = configuration["Email:OperationsEmail"];
            this.emailBuilder.To = this.To;
            this.emailBuilder.Subject = "Please confirm your Kitchen-Master account";
            this.emailBuilder.Title = "Thank you for registering.";
            var clientUrl = configuration.GetValue<string>("ClientUrl");
            var url = @$"{clientUrl}/confirmAccount/{this.ConfirmationToken}";
            this.emailBuilder.Text = $"Please click <a href='{url}'>here</a> to activate your account.";
        }
    }
}
