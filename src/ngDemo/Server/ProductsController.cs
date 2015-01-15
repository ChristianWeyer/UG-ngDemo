using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Contracts;

namespace AngularDemo.Server
{
    public class ProductsController : ApiController, IProductsApi
    {
        private static ConcurrentDictionary<int, ProductDetailsDto> database;

        static ProductsController()
        {
            database = new ConcurrentDictionary<int, ProductDetailsDto>();
            database.TryAdd(1, new ProductDetailsDto { Id = 1, Title = "Super lecker Pudding", Description = "Blaaa blaaa blubbb", Amount = 8 });
            database.TryAdd(2, new ProductDetailsDto { Id = 2, Title = "Mjamm-mjamm Gurken", Description = "Yadda yadda yad", Amount = 149 });
            database.TryAdd(3, new ProductDetailsDto { Id = 3, Title = "Mhhhh Salzstangen", Description = "Momm momm mom", Amount = 53 });
        }

        [HttpGet]
        [ActionName("list")]
        public IEnumerable<ProductDto> GetProducts()
        {
            return database.Values.Select(p => new ProductDto { Id = p.Id, Title = p.Title });
        }

        [HttpGet]
        [ActionName("item")]
        public ProductDetailsDto GetProduct(int id)
        {
            ProductDetailsDto p;
            database.TryGetValue(id, out p);

            return p;
        }

        [HttpPost]
        [ActionName("item")]
        public ProductDetailsDto Save(ProductDetailsDto product)
        {
            var id = database.Count;
            product.Id = id++;
            database.TryAdd(id, product);

            return product;
        }
    }
}