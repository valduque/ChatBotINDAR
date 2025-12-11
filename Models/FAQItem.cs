namespace ChatBotINDAR.Models
{

    public class FAQItem
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public string Category { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}