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
    public class FileStatusMatrixController : ApiController
    {
        private readonly IFileStatusMatrixRepo _repo;

        public FileStatusMatrixController(IFileStatusMatrixRepo repo)
        {
            _repo = repo;
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

        [HttpGet]
        [Route("api/filestatusmatrix/getexitcodes")]
        public IHttpActionResult GetExitCodes(int? fileId, int? statusId, int? workflowId)
        {
            try
            {
                var file = _repo.Get(fileId);

                var exitCodes = file.Where(w => w.StatusId == statusId && w.WorkflowId == workflowId).Select(w => new { ExitCode = w.ExitCode, Description = w.PathDesc }).Distinct();

                return Ok(exitCodes);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

        }

    }
}
