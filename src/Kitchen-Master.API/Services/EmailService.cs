using System;
using System.Net;
using System.Threading.Tasks;
using Kitchen_Master.API.ConfigOptions;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using MimeKit;

namespace Kitchen_Master.API.Services
{
    public class EmailService
    {
        private readonly ISmtpClient client;

        public EmailService(IOptions<EmailOptions> options)
        {
            var smtpOptions = options.Value.Smtp;
            this.client = new SmtpClient();
            client.ServerCertificateValidationCallback = (s, c, h, e) => true;
            client.Connect(smtpOptions.Host, smtpOptions.Port, smtpOptions.EnableSSL);
            client.Authenticate(smtpOptions.Username, smtpOptions.Password);
        }

        public void SendEmail(MimeMessage message)
        {
            this.client.Send(message);
        }

        public async Task SendEmailAsync(MimeMessage message)
        {
            await this.client.SendAsync(message);
        }
    }
}
