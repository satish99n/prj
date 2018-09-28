﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileTracker.Data.Model
{
    public class User
    {
        public int? UserId { get; set; }
        public string UserName { get; set; }
        public string UserActualName { get; set; }
        public string UserRole { get; set; }
        public bool? IsActive { get; set; }

    }
}
