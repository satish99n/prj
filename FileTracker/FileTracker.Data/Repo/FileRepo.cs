using Dapper;
using FileTracker.Data.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileTracker.Data
{
    public interface IFileRepo
    {
        File Get(string id);
    }

    public class FileRepo : IFileRepo
    {
        private readonly string _connStr;
        public FileRepo(string connStr)
        {
            _connStr = connStr;
        }
        public File Get(string id)
        {
            var p = new DynamicParameters();
            p.Add("@id", id);

            using (var cn = new SqlConnection(_connStr))
                return cn.Query<File>("prQry_GetFile", p, commandType: CommandType.StoredProcedure).FirstOrDefault();
        }
    }
}
