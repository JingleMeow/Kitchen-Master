using Autofac;
using Kitchen_Master.API.Email;
using Kitchen_Master.API.Email.EmailBuilder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.IoC
{
    public class EmailModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {            
            builder.RegisterType<EmailService>();
            builder.RegisterAssemblyTypes(ThisAssembly)
                .Where(t => t.IsAssignableTo<EmailBuilderBase>())
                .AsSelf();
            builder.RegisterAssemblyTypes(ThisAssembly)
                .Where(t => t.IsAssignableTo<EmailSender>())
                .AsSelf();
        }
    }
}
