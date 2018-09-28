using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileTracker.Data.Model
{
    public class File
    {
        public int? FileId { get; set; }
        public int? FileTrackId { get; set; }
        public int? StatusId { get; set; }
        public string StatusName { get; set; }
        public int? LayoutId { get; set; }
        public string LayoutName { get; set; }
        public int? CampaignId { get; set; }
        public string CampaignName { get; set; }
        public int? WorkflowId { get; set; }
        public string WorkflowName { get; set; }
        public string FileType { get; set; }
        public string InterfaceId { get; set; }
        public string InterfaceStatus { get; set; }
        public int? Priority { get; set; }
        public string BusinessPriority { get; set; }
        public string DbTable { get; set; }
        public string DbTableNoPHI { get; set; }
        public string Region { get; set; }
        public string StructPhase { get; set; }
        public string CCDLifecycleStatus { get; set; }
        public string SdmSubType { get; set; }
        public string HedisStandard { get; set; }        
        public string OidImpl { get; set; }
        public string OidProd { get; set; }
        public string OidTentant { get; set; }
        public string OidEnv { get; set; }
        public string FileSource { get; set; }
        public int? FileTrackerId { get; set; }
        public string FileName { get; set; }
        public string SalesforceId { get; set; }
        public string FilePath { get; set; }
        public double? FileSize { get; set; }
        public int? FileRowCount { get; set; }
        public DateTime? StepDateTime { get; set; }
        public DateTime? AckDateTime { get; set; }
        public DateTime? CompleteDateTime { get; set; }
        public string StepNotes { get; set; }
        public int? StepElapsedTime { get; set; }
        public string CreateUser { get; set; }
        public DateTime? CreateDateTime { get; set; }
        public string ModifyUser { get; set; }
        public DateTime? ModifyDateTime { get; set; }
    }
}
