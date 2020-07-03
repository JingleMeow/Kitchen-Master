using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Kitchen_Master.API.Email.EmailBuilder
{
    public abstract class EmailBuilderBase
    {
        public string From { get; set; }
        public string To { get; set; }
        public string Subject { get; set; }
        protected abstract MimeEntity BuildMailBody();

        public MimeMessage BuildMail()
        {
            var mail = new MimeMessage()
            {
                Subject = Subject,
                Body = BuildMailBody(),
            };
            mail.From.Add(MailboxAddress.Parse(From));
            mail.To.Add(MailboxAddress.Parse(To));
            return mail;
        }
    }
}
