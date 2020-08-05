using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Kitchen_Master.API.Services.Image
{
    public class ImageService : IFeatureService
    {
        private readonly IConfiguration _configuration;

        public ImageService(IConfiguration configuration)
        {
            this._configuration = configuration;
        }

        public async Task<string> SaveImage(IFormFile imageFormFile)
        {
            var stringBuilder = new StringBuilder();
            using (var sha256 = SHA256.Create())
            {
                var hashBytes = sha256.ComputeHash(imageFormFile.OpenReadStream());
                foreach (var b in hashBytes)
                {
                    stringBuilder.Append(b.ToString("x2"));
                }
            }
            var fileName = stringBuilder.ToString();

            var filePath = Path.Combine(this._configuration.GetSection("ImagesFolder").Value, $"{fileName}.jpg");
            if (!File.Exists(filePath))
            {
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await imageFormFile.CopyToAsync(fileStream);
                }
            }
            return fileName;
        }
    }
}
