import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
  options?: string[];
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="chatbot-container">
      <!-- Botón flotante -->

  <!---Se le quito la variable de isOpen para que la animacion del boton funcione correctamente y no dependa del estado de la ventana del chat.--->

         <button
  class="chat-button"
  (click)="openChat()"
  [class.animateOpen]="isAnimating"
  [class.animateExit]="!isAnimating">
  ?
</button>

      <!-- Ventana del chat -->
   <div class="chat-window" *ngIf="isOpen"
      [class.animate-enter]="isOpen">
        <div class="chat-header">
          <h3>Chat de Ayuda</h3>
          <button class="close-btn"
          (click)="closeChat()"
          >✕</button>
        </div>
        
        <div class="chat-body" #chatBody>
          <div *ngFor="let msg of messages" 
               [class.user-message]="msg.isUser"
               [class.bot-message]="!msg.isUser"
               class="message">
            <div class="message-text">{{ msg.text }}</div>

            <!-- MENÚ DE BOTONES -->
    <div class="options" *ngIf="!msg.isUser && msg.options?.length">
      <button
        *ngFor="let option of msg.options"
        class="option-btn"
        (click)="onOptionSelected(option)">
        {{ option }}
      </button>
    </div>

            <div class="message-time">{{ formatTime(msg.timestamp) }}</div>
          </div>
        </div>
        
        <div class="chat-input">
          <input 
            type="text" 
            [(ngModel)]="userInput"
            (keyup.enter)="sendMessage()"
            placeholder="Escribe un mensaje..."
            class="input-field">
          <button (click)="sendMessage()" class="send-btn">
            ➤
          </button>
        </div>
      </div>
    
  `,
  styleUrls: ['./chatbot.styles.css']
})
export class ChatbotComponent {
  isOpen = false;
  isAnimating = false;
  userInput = '';
  messages: Message[] = [
    {
      text: '¡Hola! ¿En qué puedo ayudarte?',
      isUser: false,
      timestamp: new Date(),
      options: [
        'Negocio',
        'Compras',
        'Pagos',
        'Horario de atención',
        'Quiero unirme',
        'Soporte técnico',
      ]
    }
  ];

  // Abrir el chat
  openChat(): void {
  
    this.isOpen = true;
    this.isAnimating = true;
    }
  

  // Cerrar el chat
  closeChat(): void {
    this.isOpen = false;
    this.isAnimating = false;
  }

  // Enviar mensajes 
  sendMessage(): void {
    if (!this.userInput.trim()) return;

    // Agregar mensaje del usuario
    this.messages.push({
      text: this.userInput,
      isUser: true,
      timestamp: new Date()
    });

    // Limpiar input
    this.userInput = '';

    // Simular respuesta del bot
    setTimeout(() => {
      this.messages.push({
        text: 'Gracias por tu mensaje. ¿Puedo ayudarte en algo más?',
        isUser: false,
        timestamp: new Date(),
        options: [
          'Ventas',
          'Seguimiento de pedido',
          'Facturación',
          'Hablar con un asesor',
          'Regresar al menú principal'
        ]
      });
    }, 15000);
  }

  // Manejar funciones de respuesta del bot
  onOptionSelected(option: string) {
    // Simula mensaje del usuario
    this.messages.push({
      text: option,
      isUser: true,
      timestamp: new Date()
    });

    // Aquí falta desarrollar la logica real para cada opción seleccionada
 //his.handleUserMessage(option);
  }

  // Formatear hora
  formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
}



