using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.ConfigOptions
{
    public class EmailOptions
    {
        public SmtpOptions Smtp { get; set; }
        public string OperationsEmail { get; set; }

        public class SmtpOptions
        {
            public string Host { get; set; }
            public int Port { get; set; }
            public string Username { get; set; }
            public string Password { get; set; }
            public bool EnableSSL { get; set; }
        }
    }
}
