using ChatBotINDAR.Models;
using ChatBotINDAR.Data;
using Microsoft.EntityFrameworkCore;

namespace ChatBotINDAR.Services
{
    public class FAQService
    {
        private readonly ChatbotContext _context;

        public FAQService(ChatbotContext context)
        {
            _context = context;
        }

        public FAQItem GetFAQ(string question)
        {
            return _context.FAQs.FirstOrDefault(f => f.Question.Contains(question));
        }

        public string GetFAQAnswer(string question)
        {
            var item = GetFAQ(question);
            return item != null ? item.Answer : "No encontré información para tu pregunta.";
        }
    }
}
