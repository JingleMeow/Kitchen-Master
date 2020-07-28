using Kitchen_Master.API.ConfigModels;
using Kitchen_Master.API.ConfigOptions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kitchen_Master.API
{
    public static class ServicesExtension
    {
        public static void AddConfigurationOptions(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<JwtOptions>(configuration.GetSection("Jwt"));
            services.Configure<EmailOptions>(configuration.GetSection("Email"));
        }

        public static void AddJwt(this IServiceCollection services, IConfiguration configuration)
        {
            var options = configuration.GetSection("Jwt").Get<JwtOptions>();
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
                .AddJwtBearer((bo =>
                {
                    bo.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(options.Secret)),
                        ValidateIssuer = true,
                        ValidIssuer = options.Issuer,
                        ValidateAudience = true,
                        ValidAudience = options.Audience,
                        ClockSkew = TimeSpan.Zero
                    };
                }));
        }
    }
}
