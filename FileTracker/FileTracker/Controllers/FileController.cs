using FileTracker.Data;
using FileTracker.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FileTracker.Controllers
{
    public class FileController : ApiController
    {
        private readonly IFileRepo _fileRepo;

        public FileController(IFileRepo fileRepo)
        {
            _fileRepo = fileRepo;
        }
        // GET: api/File
        public IHttpActionResult Get(string id)
        {
            return Ok(_fileRepo.Get(id));
        }

        // POST: api/File
        public void Post([FromBody]File file )
        {
        }

        // PUT: api/File/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/File/5
        public void Delete(int id)
        {
        }
    }
}
