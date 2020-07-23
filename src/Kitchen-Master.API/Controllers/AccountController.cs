using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Kitchen_Master.API.ApiModels.Account;
using Kitchen_Master.API.Services;
using Kitchen_Master.API.Services.Account;
using Kitchen_Master.Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SignInResult = Microsoft.AspNetCore.Identity.SignInResult;

namespace Kitchen_Master.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<KmUser> userManager;
        private readonly SignInManager<KmUser> signinManager;
        private readonly UserTokenService tokenService;
        private readonly AccountConfirmationService accountConfirmationService;

        public AccountController(UserManager<KmUser> userManager,
            SignInManager<KmUser> signinManager,
            UserTokenService tokenService,
            AccountConfirmationService accountConfirmationService )
        {
            this.userManager = userManager;
            this.signinManager = signinManager;
            this.tokenService = tokenService;
            this.accountConfirmationService = accountConfirmationService;
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<IActionResult> Register(EmailPasswordModel model)
        {
            var user = await this.userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                user = new KmUser()
                {
                    Email = model.Email,
                    UserName = model.Email
                };
                user.Email = model.Email;
                var result = await this.userManager.CreateAsync(user, model.Password);
                if (!result.Succeeded)
                {
                    return BadRequest(result.Errors.First().Code);
                }
                await this.accountConfirmationService.SendAccountConfirmationEmail(user);
                return Ok();
            }
            else
            {
                return BadRequest("The email has been registered.");
            }
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(EmailPasswordModel model)
        {
            var user = await this.userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                return BadRequest("There is no account for the email you entered.");
            }

            var result = await this.signinManager.PasswordSignInAsync(user, model.Password, false, false);
            if (result == SignInResult.Failed)
            {
                return BadRequest("Incorrect password.");
            }
            //if (result == SignInResult.NotAllowed)
            //{
            //    return BadRequest("You can not log in until email is confirmed.");
            //}

            var token = await this.tokenService.GenerateAccessToken(user);
            return Ok(token);
        }

        [HttpGet("refresh_token")]
        public async Task<ActionResult<string>> RefreshToken()
        {
            var user = await this.userManager.GetUserAsync(this.User);
            var token = await this.tokenService.GenerateAccessToken(user);
            return Ok(token);
        }

        [AllowAnonymous]
        [HttpPost("confirmAccount")]
        public async Task<IActionResult> ConfirmAccount(AccountConfirmationModel model)
        {
            try
            {
                await this.accountConfirmationService.ConfirmEmail(model);
                return Ok();
            }
            catch (FeatureServiceException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}