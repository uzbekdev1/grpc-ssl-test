using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Grpc.Net.Client;
using Test2Agent;

namespace Test2Client.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class GreeterController : ControllerBase
    {

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly GrpcChannel _channel;

        public GreeterController(ILogger<WeatherForecastController> logger, GrpcChannel channel)
        {
            _logger = logger;
            _channel = channel;
        }

        [HttpGet]
        public HelloReply SayHello([FromQuery] string name)
        {
            _logger.LogInformation("Request name:" + name);

            var client = new Greeter.GreeterClient(_channel);

            return client.SayHello(new HelloRequest()
            {
                Name = name
            });
        }

    }
}
