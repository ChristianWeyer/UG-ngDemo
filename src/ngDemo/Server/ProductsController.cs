using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace AngularDemo.Server
{
    public class ProductsController : ApiController
    {
        private static ConcurrentDictionary<int, ProductDto> database;

        static ProductsController()
        {
            database = new ConcurrentDictionary<int, ProductDto>();
            database.TryAdd(1, new ProductDto { Id = 1, Title = "Super lecker Pudding", Description = "Blaaa blaaa blubbb", Amount = 8 });
            database.TryAdd(2, new ProductDto { Id = 2, Title = "Mjamm-mjamm Gurken", Description = "Yadda yadda yad", Amount = 149 });
            database.TryAdd(3, new ProductDto { Id = 3, Title = "Mhhhh Salzstangen", Description = "Momm momm mom", Amount = 53 });
        }

        public IEnumerable<dynamic> GetProducts()
        {
            return database.Values.Select(p => new { p.Id, p.Title });
        }

        public ProductDto GetProduct(int id)
        {
            ProductDto p;
            database.TryGetValue(id, out p);

            return p;
        }
    }
}