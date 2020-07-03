using HandlebarsDotNet;
using MimeKit;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.Email.EmailBuilder
{
    public abstract class HtmlEmailBuilder : EmailBuilderBase
    {
        protected abstract string TemplateName { get; }

        protected Func<object, string> GetCompiledTemplate()
        {
            var templatePath = Path.Combine(Directory.GetCurrentDirectory(), @$"Resources\EmailTemplates\{TemplateName}.hbs");
            var stream = new FileStream(templatePath, FileMode.Open);
            using (var reader = new StreamReader(stream))
            {
                var templateHtml = reader.ReadToEnd();
                return Handlebars.Compile(templateHtml);
            }
        }
    }
}
