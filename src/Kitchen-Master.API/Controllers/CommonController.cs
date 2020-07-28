using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Kitchen_Master.API.ApiModels.Common;
using Kitchen_Master.Data.Models.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Kitchen_Master.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommonController : ControllerBase
    {
        private readonly DefinitionsModel _definitionsModel;

        public CommonController(DefinitionsModel definitionsModel)
        {
            this._definitionsModel = definitionsModel;
        }

        [AllowAnonymous]
        [HttpGet("definitions")]
        public ActionResult<DefinitionsModel> GetAll()
        {
            return this._definitionsModel;
        }
    }
}