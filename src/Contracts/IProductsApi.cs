using System.Collections.Generic;
using System.Web.Http;

namespace Contracts
{
    public interface IProductsApi
    {
        [HttpGet]
        [ActionName("list")]
        IEnumerable<ProductDto> GetProducts();

        [HttpGet]
        [ActionName("item")]
        ProductDetailsDto GetProduct(int id);

        [HttpPost]
        [ActionName("item")]
        ProductDetailsDto Save(ProductDetailsDto product);
    }
}