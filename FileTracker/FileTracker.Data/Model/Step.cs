using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileTracker.Data.Model
{
    public class Step
    {
        public int? StatusId { get; set; }
        public string StatusName { get; set; }
        public int? StatusRank { get; set; }
        public string UserAck { get; set; }
        public DateTime? DateAck { get; set; }
        public DateTime? CompletedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string Notes { get; set; }

    }
}
