using Microsoft.Extensions.Configuration;
using MimeKit;
using MimeKit.Utils;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Kitchen_Master.API.Email.EmailBuilder
{
    public class ActionlessEmailBuilder : HtmlEmailBuilder
    {
        private readonly IConfiguration configuration;

        public ActionlessEmailBuilder(IConfiguration configuration)
        {
            this.configuration = configuration;
        }
        protected override string TemplateName => "ActionlessTemplate";
        public string Title { get; set; }
        public string Text { get; set; }


        protected override MimeEntity BuildMailBody()
        {
            var bodyBuilder = new BodyBuilder();

            // Add logo
            var logoPath = Path.Combine(Directory.GetCurrentDirectory(), @"Resources\logo.png");
            var logo = bodyBuilder.LinkedResources.Add(logoPath);
            logo.ContentId = MimeUtils.GenerateMessageId();

            var compiledTemplate = GetCompiledTemplate();
            var tempateParmeters = new
            {
                logoEntityId = logo.ContentId,
                appTitle = configuration.GetValue<string>("AppTitle"),
                title = Title,
                text = Text
            };

            bodyBuilder.HtmlBody = compiledTemplate(tempateParmeters);
            return bodyBuilder.ToMessageBody();
        }
    }
}
