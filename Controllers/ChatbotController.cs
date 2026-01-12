using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ChatBotINDAR.Data;

namespace ChatBotINDAR.Controllers
{
    [ApiController]
    [Route("api/chatbot")]
    public class ChatbotController : ControllerBase
    {
        private readonly IChatService _chatService;

        public ChatController(IChatService chatService)
        {
            _chatService = chatService;
        }

        [HttpPost]
        public IActionResult Chat(ChatRequestVM request)
        {
            var response = _chatService.ProcessMessage(request);
            return Ok(response);
        }
    }
