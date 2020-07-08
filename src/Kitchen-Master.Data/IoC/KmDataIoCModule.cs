using Autofac;
using Kitchen_Master.DataModel.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace Kitchen_Master.DataModel.IoC
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
