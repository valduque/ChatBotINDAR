using ChatBotINDAR.Services;
using ChatBotINDAR.Data;

namespace ChatBotINDAR.ViewModel
{
    public class ChatViewModel
    {
        private readonly IntentService _intentService;
        private readonly FAQService _faqService;
   

        public ChatViewModel(IntentService intentService, FAQService faqService)
        {
            _intentService = intentService;
            _faqService = faqService;
      
        }

        public async Task<string> ProcessMessage(string message)
        {
            var intent = _intentService.DetectIntent(message);

            switch (intent)
            {

                case "ConsultarFAQ":
                    return _faqService.GetFAQAnswer(message);

                default:
                    return "No entendí tu consulta, ¿puedes reformularla?";
            }
        }
    }
}
