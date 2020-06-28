﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Kitchen_Master.API.ApiModels.Account;
using Kitchen_Master.API.Services;
using Kitchen_Master.API.Services.Account;
using Kitchen_Master.DataModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
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
        private readonly EmailService emailService;

        public AccountController(UserManager<KmUser> userManager,
            SignInManager<KmUser> signinManager,
            UserTokenService tokenService,
            EmailService emailService)
        {
            this.userManager = userManager;
            this.signinManager = signinManager;
            this.tokenService = tokenService;
            this.emailService = emailService;
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
                return Ok();
            }
            else
            {
                return BadRequest("The email has been registered.");
            }
        }

        [AllowAnonymous]
        [HttpGet("sendEmail")]
        public async Task<IActionResult> SendEmail()
        {
            var message = new MimeMessage();
            message.From.Add(MailboxAddress.Parse("whoever@me.com"));
            message.To.Add(MailboxAddress.Parse("fjie@fe.com"));
            message.Subject = "CurrentTime";
            message.Body = new TextPart("plain")
            {
                Text = DateTime.Now.ToString()
            };
            await this.emailService.SendEmailAsync(message);
            return Ok("Email Sent");
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
    }
}