using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BFAExample
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        // GET: api/Car
        [HttpGet]
        public IEnumerable<string> Get()
        {
            Task.Delay(5000);

            return new[]
            {
                "Mercedes", 
                "Honda",
                "Nissan",
                "Jaguar",
                "Mitsubishi",
                "Lincoln",
                "Ford",
                "Dodge",
                "BMW"
            };
        }

        // GET: api/Car/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Car
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Car/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
