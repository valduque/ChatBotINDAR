using Microsoft.EntityFrameworkCore;
using ChatBotINDAR.Data;

namespace ChatBotINDAR.Services
{
    public class ChatbotService
    {
        private readonly ChatbotContext _context;

        public ChatbotService(ChatbotContext context)
        {
            _context = context;
        }

        public async Task<ChatNodeDto?> GetNodeAsync(int nodeId)
        {
            var node = await _context.ChatNodes
                .Include(n => n.Options)
                .FirstOrDefaultAsync(n => n.Id == nodeId);

            if (node == null) return null;

            return new ChatNodeDto
            {
                Id = node.Id,
                Message = node.Message,
                Options = node.Options.Select(o => new ChatOptionDto
                {
                    Label = o.Label,
                    NextNodeId = o.NextNodeId
                }).ToList()
            };
        }
    }
}
