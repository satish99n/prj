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
    public interface ICodeSetRepo
    {
        IEnumerable<CodeSet> GetAll();
    }

    public class CodeSetRepo : ICodeSetRepo
    {
        private readonly string _connStr;
        public CodeSetRepo(string connStr)
        {
            _connStr = connStr;
        }
        public IEnumerable<CodeSet> GetAll()
        {
            using (var cn = new SqlConnection(_connStr))
                return cn.Query<CodeSet>("prQry_GetAllCodeSets", commandType: CommandType.StoredProcedure);
        }
    }
}
