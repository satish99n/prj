using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileTracker.Data.Model
{
    public class FileTrack
    {
        public int? FileTrackId { get; set; }        
        public int? FileId { get; set; }
        public string Completed { get; set; }
        public string SalesforceId { get; set; }
        public string FilePath { get; set; }
        public double? FileSize { get; set; }
        public int? FileRowCount { get; set; }
        public int? Priority { get; set; }
        public string BusinessPriority { get; set; }
        public string CampaignName{ get; set; }
		public int? CampaignId{ get; set; }
		public string WorkflowName{ get; set; }
		public int? WorkflowId{ get; set; }
        public string StatusName { get; set; }
        public int? StatusId{ get; set; }
		public string FileName{ get; set; }
        public string AssigneeName { get; set; }
        public int? AssigneeId{ get; set; }
        public string Assigned { get { return (string.IsNullOrEmpty("AssigneeName") ? "Unassigned" : "Assigned"); } }
		public string AssigneeRole{ get; set; }
		public string CurrentStep { get; set;}
        public DateTime? AckDateTime { get; set; }
        public string Notes { get; set; }
        public string LastModified { get; set; }
        public DateTime? LastModifiedDateTime { get; set; }
        public int? ExitCode { get; set; }

    }
}
