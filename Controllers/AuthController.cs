using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using webApp.Models;

namespace webApp.Controllers
{
    [Route("[controller]")]
    public class AuthController : Controller
    {
        private readonly ILogger<AuthController> _logger;

        public AuthController(ILogger<AuthController> logger)
        {
            _logger = logger;
        }

        [HttpGet("SignIn")]
        public IActionResult SignIn()
        {
            return View("~/Views/Home/SignIn.cshtml");
        }

        [HttpGet("SignUp")]
        public IActionResult SignUp()
        {
            return View("~/Views/Home/SignUp.cshtml");
        }

        [HttpGet("Dashboard")]
        public IActionResult Dashboard()
        {
            return View("~/Views/Auth/Dashboard.cshtml");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        [HttpGet("Error")]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
