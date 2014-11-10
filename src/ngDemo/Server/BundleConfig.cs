using System.Web.Optimization;

namespace AngularDemo.Server
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new Bundle("~/app/css")
               .IncludeDirectory("~/libs", "*.css", true)
               .IncludeDirectory("~/app", "*.css", true)
               );

            bundles.Add(new Bundle("~/app/js")
                .IncludeDirectory("~/libs", "*.js", true)
                .IncludeDirectory("~/app", "*.js", true)
                .IncludeDirectory("~/appStartup", "*.js", true)
                );
        }
    }
}