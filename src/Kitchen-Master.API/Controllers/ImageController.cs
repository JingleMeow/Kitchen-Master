using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Kitchen_Master.API.Services.Image;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Kitchen_Master.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ImageController : ControllerBase
    {
        private readonly ImageService _imageService;

        public ImageController(ImageService imageService)
        {
            this._imageService = imageService;
        }

        [HttpPut("upload")]
        public async Task<ActionResult<string>> Upload([FromForm(Name = "image")] List<IFormFile> images)
        {
            var fileName = await _imageService.SaveImage(images[0]);
            return Ok(fileName);
        }
    }
}