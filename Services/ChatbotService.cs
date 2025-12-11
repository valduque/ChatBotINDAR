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

        public async Task<string> GetAnswerAsync(string question)
        {
            // Buscar respuesta en FAQs
            var faq = await _context.FAQs
            .Where(x => x.Question.ToLower().Contains(question.ToLower()))
            .FirstOrDefaultAsync();


            if (faq != null)
                return faq.Answer;

            return "No encontré información sobre esa pregunta.";
        }
    }
}
