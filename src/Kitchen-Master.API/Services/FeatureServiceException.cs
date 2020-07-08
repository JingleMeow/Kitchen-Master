using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.Services
{
    public class FeatureServiceException : Exception
    {
        public FeatureServiceException(string message)
            : base(message)
        {
        }
    }
}
