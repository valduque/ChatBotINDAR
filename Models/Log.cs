namespace ChatBotINDAR.Models
{
    public class Log
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public DateTime CreatedAt { get; set; }

        public User User { get; set; }
    }
}
