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
    public interface IStatusRepo
    {
        IEnumerable<Status> GetAll();
    }

    public class StatusRepo : IStatusRepo
    {
        private readonly string _connStr;
        public StatusRepo(string connStr)
        {
            _connStr = connStr;
        }

        public IEnumerable<Status> GetAll()
        {
            using (var cn = new SqlConnection(_connStr))
                return cn.Query<Status>("prQry_GetAllStatuses", commandType: CommandType.StoredProcedure);
        }
        
    }
}
