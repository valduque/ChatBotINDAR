public class ChatOption
{
    public int Id { get; set; }
    public string Label { get; set; }

    public int CurrentNodeId { get; set; }
    public int NextNodeId { get; set; }

    public ChatNode CurrentNode { get; set; }
}
