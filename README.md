# 🤖 ChatBotINDAR

Proyecto de Chatbot Administrativo desarrollado en C# (.NET) con arquitectura MVVM / API REST, pensado para apoyar al área administrativa resolviendo dudas frecuentes (horarios, procesos, información interna, etc.).

Este README explica cómo acceder, cómo usar y cómo hacer funcionar el proyecto con lo que está implementado hasta ahora.

## 📌 Tecnologías utilizadas

- .NET 8 / ASP.NET Core Web API
- Entity Framework Core
- Base de datos: PostgreSQL o SQL Server (según configuración)
- Arquitectura: MVVM / Capas (Models, Controllers, Services, Data)
- Herramientas:
  - Visual Studio / VS Code
  - Postman (para pruebas de API)
  - pgAdmin o SQL Server Management Studio

## 📂 Estructura general del proyecto
```
ChatBotINDAR/
│
├── Controllers/
│   └── ChatbotController.cs      # Endpoints del chatbot
│
├── Models/
│   ├── User.cs                    # Modelo de usuario
│   └── Log.cs                     # Registro de preguntas y respuestas
│
├── Data/
│   └── ApplicationDbContext.cs   # Contexto de EF Core
│
├── Services/
│   └── ChatbotService.cs         # Lógica del chatbot
│
├── appsettings.json              # Configuración (DB, conexiones)
├── Program.cs                    # Arranque de la aplicación
├── ChatBotINDAR.csproj
└── README.md
```

## ⚙️ Requisitos previos

Antes de ejecutar el proyecto asegúrate de tener:

- ✅ .NET SDK 8 instalado
- ✅ Base de datos (PostgreSQL o SQL Server)
- ✅ Postman o navegador
- ✅ Variables de conexión configuradas

Verifica .NET:
```bash
dotnet --version
```

## 🗄️ Configuración de la base de datos

### 1️⃣ Crear la base de datos

Crea una base de datos de prueba, por ejemplo:

- PostgreSQL: `chatbot_test_db`
- SQL Server: `ChatBotINDAR_DB`

### 2️⃣ Configurar `appsettings.json`

**Ejemplo PostgreSQL:**
```json
"ConnectionStrings": {
  "DefaultConnection": "Host=localhost;Port=5434;Database=chatbot_test_db;Username=postgres;Password=tu_password"
}
```

**Ejemplo SQL Server:**
```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=ChatBotINDAR_DB;Trusted_Connection=True;TrustServerCertificate=True"
}
```

### 3️⃣ Aplicar migraciones (si existen)
```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

Esto creará las tablas principales:

- `Users`
- `Logs`

## ▶️ Cómo ejecutar el proyecto

Desde la carpeta raíz del proyecto:
```bash
dotnet run
```

Si todo es correcto verás algo como:
```
Now listening on: http://localhost:5000
```

## 🔌 Endpoints disponibles

### 📍 Preguntar al chatbot

**GET** `http://localhost:5000/api/chatbot/ask?question=horario`

**Respuesta esperada:**
```json
{
  "question": "horario",
  "answer": "Nuestro horario de atención es de 9 a 6"
}
```

### 📍 Probar con Postman

1. Método: **GET**
2. URL: `http://localhost:5000/api/chatbot/ask?question=tu_pregunta`
3. Enviar

## 🧠 Cómo funciona el chatbot (flujo)

1. El usuario envía una pregunta
2. El Controller recibe la solicitud
3. El Service procesa la lógica
4. Se consulta la base de datos (si aplica)
5. Se genera una respuesta
6. Se guarda el log (pregunta / respuesta)
7. Se devuelve la respuesta al usuario
```
Usuario → Controller → Service → DB → Service → Controller → Usuario
```

## 📝 Registro de preguntas (Logs)

Cada interacción se guarda con:

- Pregunta
- Respuesta
- Usuario (si aplica)
- Fecha (`CreatedAt`)

Esto permite:

- Auditoría
- Métricas
- Mejora del chatbot

## ⚠️ Problemas comunes

### ❌ Error de conexión

- Verifica el puerto (`5434`, `5000`, etc.)
- Revisa `appsettings.json`
- Confirma que la base de datos esté corriendo

### ❌ Advertencias de Entity Framework

Ejemplo:
```
NU1603: depende de Microsoft.EntityFrameworkCore...
```

**Solución:**
```bash
dotnet restore
dotnet clean
dotnet build
```

## 🚀 Próximos pasos sugeridos

- 🔐 Autenticación de usuarios
- 🤖 Respuestas más inteligentes (reglas o IA)
- 📊 Dashboard administrativo
- 🌐 Integración con Angular
- 🧪 Pruebas unitarias

## 👩‍💻 Autora

**Valeria Duque**  
Proyecto académico / profesional de backend y arquitectura de software.
