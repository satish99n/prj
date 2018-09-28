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
    public class UserController : ApiController
    {
        private readonly IUserRepo _userRepo;

        public UserController(IUserRepo userRepo)
        {
            _userRepo = userRepo;
        }

        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(_userRepo.GetAll());
        }


    }
}
