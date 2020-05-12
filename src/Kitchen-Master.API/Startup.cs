using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Kitchen_Master.DataModel;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Autofac;
using Kitchen_Master.API.IoC;

namespace Kitchen_Master.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<KitchenMasterDbContext>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("DefaultConnection")
                    ));
            services.AddIdentity<KmUser, KmRole>(options =>
                options.User.RequireUniqueEmail = true)
                .AddEntityFrameworkStores<KitchenMasterDbContext>();
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        // Add any Autofac modules or registrations.
        public void ConfigureContainer(ContainerBuilder builder)
        {
            builder.RegisterModule(new KitchenMasterApiIoCModule());
        }
    }
}
