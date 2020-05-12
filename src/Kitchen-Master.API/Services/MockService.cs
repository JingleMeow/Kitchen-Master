using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kitchen_Master.API.Services
{
    public class MockService : IFeatureService
    {
        public void Act()
        {
            Console.WriteLine("Act");
        }

        ~MockService()
        {
            Console.WriteLine("finalized");
        }
    }
}
