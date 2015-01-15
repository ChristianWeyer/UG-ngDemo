using Contracts;

namespace ConsoleClient
{
    class Program
    {
        static void Main(string[] args)
        {
            var client = WebApiProxyFactory.CreateProxyFor<IProductsApi>("http://windows8vm/ngdemo/api/products");

            var products = client.GetProducts();

            var product = client.GetProduct(1);

            var newProduct = client.Save(new ProductDetailsDto() {Title = "Foo", Description = "Bar", Amount = 10});
        
        }
    }
}
