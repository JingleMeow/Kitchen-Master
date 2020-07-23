using Autofac;
using Kitchen_Master.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace Kitchen_Master.Data.IoC
{
    public class KmDataIoCModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(ThisAssembly)
                .Where(t => t.IsAssignableTo<IRepository>())
                .AsSelf();
        }
    }
}
