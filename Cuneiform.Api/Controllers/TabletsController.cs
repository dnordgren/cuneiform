using System.Collections.Generic;
using Cuneiform.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Cuneiform.Api.Controllers
{
    [ApiController]
    [Route("tablets")]
    public class TabletsController : ControllerBase
    {
        private readonly ILogger<TabletsController> _logger;

        public TabletsController(ILogger<TabletsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Tablet> Get()
        {
            _logger.LogInformation("Get Tablet");

            var tablets = new List<Tablet>
            {
                new Tablet
                {
                    DomAnchor = "#anchor-1",
                    AuthorId = "@dereknordgren",
                    Subject = "Whoa, purty neat",
                    Body = "how neat is that",
                },
            };

            return tablets;
        }
    }
}
