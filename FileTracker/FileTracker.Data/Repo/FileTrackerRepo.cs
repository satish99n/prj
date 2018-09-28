using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FileTracker.Data.Model;

namespace FileTracker.Data.Repo
{
    public interface IFileTrackRepo
    {
        IEnumerable<FileTrack> GetAll();
        File Get(int? id);
        void Update(FileTrack fileTrack);
    }

    public class FileTrackRepo : IFileTrackRepo
    {
        private readonly string _connStr;
        public FileTrackRepo(string connStr)
        {
            _connStr = connStr;
        }

        public IEnumerable<FileTrack> GetAll()
        {
            using (var cn = new SqlConnection(_connStr))
                return cn.Query<FileTrack>("prQry_GetAllFileTracks", commandType: CommandType.StoredProcedure);
        }

        public File Get(int? id)
        {
            var p = new DynamicParameters();
            p.Add("@fileTrackId", id);

            using (var cn = new SqlConnection(_connStr))
                return cn.Query<File>("prQry_GetFile", p, commandType: CommandType.StoredProcedure).FirstOrDefault();
        }

        public void Update(FileTrack fileTrack)
        {
            var p = new DynamicParameters();
            p.Add("@id", fileTrack.FileId);
            p.Add("@fileTrackerId", fileTrack.FileTrackId);
            p.Add("@priority", fileTrack.Priority);
            p.Add("@businessPriority", fileTrack.BusinessPriority);
            p.Add("@fileName", fileTrack.FileName);
            p.Add("@salesforceId", fileTrack.SalesforceId);
            p.Add("@filePath", fileTrack.FilePath);
            p.Add("@statusId", fileTrack.StatusId);
            p.Add("@assignedId", fileTrack.AssigneeId);
            p.Add("@ack", fileTrack.AckDateTime);
            p.Add("@notes", fileTrack.Notes);
            p.Add("@exitCode", fileTrack.ExitCode);
            p.Add("@user", fileTrack.LastModified);

            using (var cn = new SqlConnection(_connStr))
                cn.Execute("prUpd_UpdateFile", p, commandType: CommandType.StoredProcedure);
        }
    }
}
