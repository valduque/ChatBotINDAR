public class IntentViewModel
{
    public Intent GetIntent(string message)
    {
        if (message.Contains("pedido"))
            return new Intent { Name = "ConsultarPedido", Confidence = 0.9 };
        if (message.Contains("factura"))
            return new Intent { Name = "ConsultarFactura", Confidence = 0.8 };

        return new Intent { Name = "Unknown", Confidence = 0.0 };
    }
}
