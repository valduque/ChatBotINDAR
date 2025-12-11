using Microsoft.EntityFrameworkCore;
using ChatBotINDAR.Models;

namespace ChatBotINDAR.Data
{
    public class ChatbotContext : DbContext
    {
        public ChatbotContext(DbContextOptions<ChatbotContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<FAQItem> FAQs { get; set; }
        public DbSet<Log> Logs { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FAQItem>().ToTable("faqs");
            modelBuilder.Entity<User>().ToTable("users");
            modelBuilder.Entity<Log>().ToTable("logs");
        }
    }
    

    }
