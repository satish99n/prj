using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileTracker.Data.Model
{
    public class FileStatusMatrix
    {
        public int? FileId { get; set; }
        public int? StatusId { get; set; }
        public int? WorkflowId { get; set; }
        public int? ExitCode { get; set; }
        public int? NewStatusId { get; set; }
        public string NewStatusName { get; set; }
        public string PathDesc { get; set; }
    }
}
