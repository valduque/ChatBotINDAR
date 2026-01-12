public class ChatNode
{
    public int Id { get; set; }
    public string Message { get; set; }
    public bool HasOptions { get; set; }

    public ICollection<ChatOption> Options { get; set; }
}