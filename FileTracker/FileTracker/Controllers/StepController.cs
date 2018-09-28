using FileTracker.Data.Repo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FileTracker.Controllers
{
    public class StepController : ApiController
    {
        private readonly IStepRepo _stepRepo;

        public StepController(IStepRepo stepRepo)
        {
            _stepRepo = stepRepo;
        }
        // GET: api/File
        public IHttpActionResult Get(int? id, int? trackId)
        {
            return Ok(_stepRepo.GetAllFileSteps(id, trackId));
        }

        // POST: api/Step
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Step/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Step/5
        public void Delete(int id)
        {
        }
    }
}
