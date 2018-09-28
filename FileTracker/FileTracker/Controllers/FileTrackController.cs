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
    public class FileTrackController : ApiController
    {
        private readonly IFileTrackRepo _repo;

        public FileTrackController(IFileTrackRepo repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IHttpActionResult Get()
        {
            try
            {
                var fileTracks = _repo.GetAll();

                return Ok(fileTracks);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
        [HttpGet]
        public IHttpActionResult Get(int? id)
        {
            try
            {
                var file = _repo.Get(id);

                return Ok(file);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
            
        }

        [HttpPost]
        [Route("api/filetrack/update")]
        public IHttpActionResult Update([FromBody]FileTrack fileTrack)
        {
            try
            {
                var currUser = RequestContext.Principal.Identity.Name;

                if (string.IsNullOrEmpty(currUser))
                    currUser = "system user";

                fileTrack.LastModified = currUser;
                fileTrack.LastModifiedDateTime = DateTime.Now;

                _repo.Update(fileTrack);

                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
