public class ChatViewModel
{
    private readonly IntentService _intentService;
    private readonly FAQService _faqService;
    private readonly OrderService _orderService;

    public ChatViewModel(IntentService intentService, FAQService faqService, OrderService orderService)
    {
        _intentService = intentService;
        _faqService = faqService;
        _orderService = orderService;
    }

    public async Task<string> ProcessMessage(string message) 
    {
        var intent = _intentService.DetectIntent(message);

        switch(intent.Name)
        {
            case "ConsultarPedido":
                var pedido = await _orderService.GetOrderStatus(message);
                return pedido;

            case "ConsultarFAQ":
                return _faqService.GetFAQAnswer(message);

            default:
                return "No entendí tu consulta, ¿puedes reformularla?";
        }
    }
}
