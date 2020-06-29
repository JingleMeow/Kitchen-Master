using Kitchen_Master.API.ConfigOptions;
using Kitchen_Master.DataModel;
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
        private readonly EmailService emailService;
        private readonly IConfiguration configuration;
        private readonly EmailOptions options;

        public UserConfirmationService(KitchenMasterDbContext context,
            EmailService emailService,
            IConfiguration configuration,
            IOptions<EmailOptions> options)
        {
            this.context = context;
            this.emailService = emailService;
            this.configuration = configuration;
            this.options = options.Value;
        }

        public void RequestConfirmation(string email)
        {
            KmUserConfirmation confirmation = new KmUserConfirmation()
            {
                Email = email
            };
            this.context.UserConfirmations.Add(confirmation);
            this.context.SaveChanges();
            emailService.SendEmail(this.GenerateUserConfirmationMail(confirmation));
        }

        private MimeMessage GenerateUserConfirmationMail(KmUserConfirmation confirmation)
        {
            var message = new MimeMessage();
            message.From.Add(MailboxAddress.Parse(this.options.OperationsEmail));
            message.To.Add(MailboxAddress.Parse(confirmation.Email));
            message.Subject = "Please confirm your Email";
            message.Body = new TextPart("plain")
            {
                Text = $"Please click the following link." +
                $"{this.configuration.GetValue<string>("ClientUrl")}/confirmEmail/{confirmation.Id.ToString()}"
            };
            return message;
        }
    }
}
