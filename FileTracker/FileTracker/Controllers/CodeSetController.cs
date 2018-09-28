using FileTracker.Data;
using FileTracker.Data.Model;
using FileTracker.Data.Repo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FileTracker.Controllers
{
    public class CodeSetController : ApiController
    {
        private readonly ICodeSetRepo _repo;

        public CodeSetController(ICodeSetRepo repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IHttpActionResult Get(string type = "Business Priority")
        {
            try
            {
                var codeSets = _repo.GetAll().Where(w => w.Set == type);

                return Ok(codeSets);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }        
    }
}
