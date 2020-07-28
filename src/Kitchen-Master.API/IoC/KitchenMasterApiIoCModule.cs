using Autofac;
using Kitchen_Master.API.ApiModels.Common;
using Kitchen_Master.API.Services;
using Kitchen_Master.Data.IoC;
using System.Linq;

namespace Kitchen_Master.API.IoC
{
    public class KitchenMasterApiIoCModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(ThisAssembly)
                .Where(t => t.IsAssignableTo<IFeatureService>())
                .AsSelf();
            builder.RegisterType<DefinitionsModel>().SingleInstance();

            builder.RegisterModule<KmDataIoCModule>();
            builder.RegisterModule<EmailModule>();
        }
    }
}
