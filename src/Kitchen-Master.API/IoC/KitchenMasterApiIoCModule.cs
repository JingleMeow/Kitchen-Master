using Autofac;
using Kitchen_Master.API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.IoC
{
    public class KitchenMasterApiIoCModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(ThisAssembly)
                .Where(t => t.IsAssignableTo<IFeatureService>())
                .AsSelf();
        }
    }
}
