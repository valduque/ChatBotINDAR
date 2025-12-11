using Microsoft.AspNetCore.Mvc;
using ChatBotINDAR.Services;

namespace ChatBotINDAR.Controllers
{
    [ApiController]
    [Route("api/chatbot")]
    public class ChatbotController : ControllerBase
    {
        private readonly ChatbotService _service;

        public ChatbotController(ChatbotService service)
        {
            _service = service;
        }

        [HttpGet("ask")]
        public async Task<IActionResult> Ask([FromQuery] string question)
        {
            var answer = await _service.GetAnswerAsync(question);
            return Ok(new { question, answer });
        }
    }
}
