using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Kitchen_Master.API.Services.Account
{
    public class CurrentUserService : IFeatureService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public CurrentUserService(IHttpContextAccessor httpContextAccessor)
        {
            this._httpContextAccessor = httpContextAccessor;
        }

        public int UserId
        {
            get
            {
                var authorId = this._httpContextAccessor.HttpContext.User.Claims.First(x => x.Type == ClaimTypes.NameIdentifier).Value;
                return Int32.Parse(authorId);
            }
        }
    }
}
