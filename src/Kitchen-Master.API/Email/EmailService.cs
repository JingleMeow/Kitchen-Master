using System;
using System.Net;
using System.Threading.Tasks;
using Kitchen_Master.API.ConfigOptions;
using Kitchen_Master.API.Email.EmailBuilder;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using MimeKit;

namespace Kitchen_Master.API.Email
{
    public class EmailService
    {
        protected readonly EmailOptions emailOptions;
        private readonly ISmtpClient client;

        public EmailService(IOptions<EmailOptions> options)
        {
            this.emailOptions = options.Value;
            this.client = new SmtpClient();
        }

        public void Connect()
        {
            client.ServerCertificateValidationCallback = (s, c, h, e) => true;
            client.Connect(this.emailOptions.Smtp.Host, this.emailOptions.Smtp.Port, this.emailOptions.Smtp.EnableSSL);
            client.Authenticate(this.emailOptions.Smtp.Username, this.emailOptions.Smtp.Password);
        }

        public void Send(MimeMessage message)
        {
            client.Send(message);
        }

        public void SendEmail()
        {
            var client = new SmtpClient();
            client.ServerCertificateValidationCallback = (s, c, h, e) => true;
            client.Connect(this.emailOptions.Smtp.Host, this.emailOptions.Smtp.Port, this.emailOptions.Smtp.EnableSSL);
            client.Authenticate(this.emailOptions.Smtp.Username, this.emailOptions.Smtp.Password);

            //client.Send(message);
        }

    }
}
