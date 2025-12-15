using ChatBotINDAR.Data;
using ChatBotINDAR.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Agregar servicios
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Conexión a SQL Server
builder.Services.AddDbContext<ChatbotContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("ChatbotDb")));

// Inyección del ChatbotService
builder.Services.AddScoped<ChatbotService>();

var app = builder.Build();

// Swagger solo en desarrollo
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();

app.Run();