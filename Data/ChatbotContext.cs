using Microsoft.EntityFrameworkCore;

namespace ChatBotINDAR.Data
{
    public class ChatbotContext : DbContext
    {
        public ChatbotContext(DbContextOptions<ChatbotContext> options)
            : base(options){}

        public DbSet<ChatNode> ChatNodes { get; set; }
        public DbSet<ChatOption> ChatOptions { get; set; }
        public DbSet<ChatMessageLog> ChatMessageLogs { get; set; }
    }
}

