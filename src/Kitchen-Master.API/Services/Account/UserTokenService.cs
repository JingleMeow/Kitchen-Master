using Kitchen_Master.API.ConfigModels;
using Kitchen_Master.Data.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Kitchen_Master.API.Services.Account
{
    public class UserTokenService : IFeatureService
	{
		private readonly UserManager<KmUser> userManager;
		private readonly JwtOptions jwtOptions;

		public UserTokenService(UserManager<KmUser> userManager,
			IOptions<JwtOptions> jwtOptions)
		{
			this.userManager = userManager;
			this.jwtOptions = jwtOptions.Value;
		}

		public async Task<string> GenerateAccessToken(KmUser user)
		{
			var mySecret = this.jwtOptions.Secret;
			var mySecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(mySecret));

			var myIssuer = this.jwtOptions.Issuer;
			var myAudience = this.jwtOptions.Audience;

			var claims = await this.userManager.GetClaimsAsync(user);
			claims.Add(new Claim(ClaimTypes.Email, user.Email));
			claims.Add(new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()));
			var tokenDescriptor = new SecurityTokenDescriptor
			{
				Subject = new ClaimsIdentity(claims),
				Expires = DateTime.UtcNow.AddDays(7),
				Issuer = myIssuer,
				Audience = myAudience,
				SigningCredentials = new SigningCredentials(mySecurityKey, SecurityAlgorithms.HmacSha256)
			};

			var tokenHandler = new JwtSecurityTokenHandler();
			var token = tokenHandler.CreateToken(tokenDescriptor);
			return tokenHandler.WriteToken(token);
		}
	}
}
