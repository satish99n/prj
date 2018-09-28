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
    public interface IFileStatusMatrixRepo
    {
        IEnumerable<FileStatusMatrix> Get(int? fileId);
    }

    public class FileStatusMatrixRepo : IFileStatusMatrixRepo
    {
        private readonly string _connStr;
        public FileStatusMatrixRepo(string connStr)
        {
            _connStr = connStr;
        }
        
        public IEnumerable<FileStatusMatrix> Get(int? fileId)
        {
            DynamicParameters p = new DynamicParameters();
            p.Add("@fileId", fileId);

            using (var cn = new SqlConnection(_connStr))
                return cn.Query<FileStatusMatrix>("prQry_GetFileStatusMatrix", p, commandType: CommandType.StoredProcedure);
        }
    }
}
