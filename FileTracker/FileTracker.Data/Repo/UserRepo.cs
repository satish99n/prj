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
    public interface IUserRepo
    {
        IEnumerable<User> GetAll();
    }

    public class UserRepo : IUserRepo
    {
        private readonly string _connStr;
        public UserRepo(string connStr)
        {
            _connStr = connStr;
        }

        public IEnumerable<User> GetAll()
        {
            using (var cn = new SqlConnection(_connStr))
                return cn.Query<User>("prQry_GetAllUsers", commandType: CommandType.StoredProcedure);
        }

    }
}
