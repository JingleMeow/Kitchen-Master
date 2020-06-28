using Autofac;
using Kitchen_Master.API.Services;
using System.Linq;

namespace Kitchen_Master.API.IoC
{
    public class KitchenMasterApiIoCModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<EmailService>();
            builder.RegisterAssemblyTypes(ThisAssembly)
                .Where(t => t.IsAssignableTo<IFeatureService>())
                .AsSelf();
        }
    }
}
