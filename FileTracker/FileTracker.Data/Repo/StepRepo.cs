using Dapper;
using FileTracker.Data.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileTracker.Data.Repo
{
    public interface IStepRepo
    {
        IEnumerable<Step> GetAllFileSteps(int? id, int? trackId);
    }
    public class StepRepo : IStepRepo
    {
        private readonly string _connStr;
        public StepRepo(string connStr)
        {
            _connStr = connStr;
        }
        public IEnumerable<Step> GetAllFileSteps(int? id, int? trackId)
        {
            var p = new DynamicParameters();
            p.Add("@id", id);
            p.Add("@fileTrackId", trackId);

            using (var cn = new SqlConnection(_connStr))
                return cn.Query<Step>("prQry_GetAllFileSteps", p, commandType: CommandType.StoredProcedure);
        }
    }
}
