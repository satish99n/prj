using FileTracker.Data;
using LightInject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using System.Configuration;
using FileTracker.Data.Repo;

namespace FileTracker
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            var container = new ServiceContainer();
            container.RegisterApiControllers();
            container.EnableWebApi(GlobalConfiguration.Configuration);

            container.Register<IFileRepo>(factory => {
                var connStr = ConfigurationManager.AppSettings["connStr"].ToString();

                return new FileRepo(connStr);
            });

            container.Register<ICodeSetRepo>(factory => {
                var connStr = ConfigurationManager.AppSettings["connStr"].ToString();

                return new CodeSetRepo(connStr);
            });

            container.Register<IFileTrackRepo>(factory => {
                var connStr = ConfigurationManager.AppSettings["connStr"].ToString();

                return new FileTrackRepo(connStr);
            });

            container.Register<IStepRepo>(factory => {
                var connStr = ConfigurationManager.AppSettings["connStr"].ToString();

                return new StepRepo(connStr);
            });

            container.Register<IFileStatusMatrixRepo>(factory => {
                var connStr = ConfigurationManager.AppSettings["connStr"].ToString();

                return new FileStatusMatrixRepo(connStr);
            });

            container.Register<IStatusRepo>(factory => {
                var connStr = ConfigurationManager.AppSettings["connStr"].ToString();

                return new StatusRepo(connStr);
            });

            container.Register<IUserRepo>(factory => {
                var connStr = ConfigurationManager.AppSettings["connStr"].ToString();

                return new UserRepo(connStr);
            });

            GlobalConfiguration.Configure(WebApiConfig.Register);

            GlobalConfiguration.Configuration.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
        }
    }
}
