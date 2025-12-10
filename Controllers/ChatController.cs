[ApiController]
[Route("api/[controller]")]
public class ChatController : ControllerBase
{
    private readonly ChatViewModel _chatVM;

    public ChatController(ChatViewModel chatVM)
    {
        _chatVM = chatVM;
    }

    [HttpPost]
    public async Task<IActionResult> Chat([FromBody] ChatMessage input)
    {
        var response = await _chatVM.ProcessMessage(input.Text);

        return Ok(new ChatResponse { Text = response });
    }
}
