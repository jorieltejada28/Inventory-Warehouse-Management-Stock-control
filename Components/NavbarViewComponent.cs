using Microsoft.AspNetCore.Mvc;

namespace webApp.Components
{
    public class NavbarViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}