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
    public class StatusController : ApiController
    {
        private readonly IStatusRepo _statusRepo;

        public StatusController(IStatusRepo StatusRepo)
        {
            _statusRepo = StatusRepo;
        }

        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(_statusRepo.GetAll());
        }

    }
}
