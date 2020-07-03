using Kitchen_Master.API.Email.EmailBuilder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.Email
{
    public abstract class EmailSender
    {
        private readonly EmailService emailService;
        protected readonly EmailBuilderBase emailBuilder;

        public EmailSender(EmailService emailService, EmailBuilderBase emailBuilder)
        {
            this.emailService = emailService;
            this.emailBuilder = emailBuilder;
        }

        public void SendEmail()
        {
            this.SetupEmailBuilder();
            var mail = this.emailBuilder.BuildMail();
            this.emailService.Connect();
            this.emailService.Send(mail);
        }

        protected abstract void SetupEmailBuilder();
    }
}
