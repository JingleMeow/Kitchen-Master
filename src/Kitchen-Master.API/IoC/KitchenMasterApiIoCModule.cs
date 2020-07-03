using Autofac;
using Kitchen_Master.API.Email;
using Kitchen_Master.API.Services;
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
            builder.RegisterModule<EmailModule>();
        }
    }
}
