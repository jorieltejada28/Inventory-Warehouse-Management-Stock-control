using Microsoft.AspNetCore.Mvc;

namespace webApp.Components
{
    public class FooterViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
