import { Component } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { timestamp } from 'rxjs';

//const time = new Date();
//const hour = time.getHours();

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
  //hour = timestamp.getHours();
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="chatbot-container">
      <!-- Botón flotante -->
      <button class="chat-button" (click)="toggleChat()" *ngIf="!isOpen">
      ?
      </button>
      
      <!-- Ventana del chat -->
      <div class="chat-window" *ngIf="isOpen">
        <div class="chat-header">
          <h3>Chat</h3>
          <button class="close-btn" (click)="toggleChat()">✕</button>
        </div>
        
        <div class="chat-body">
          <div *ngFor="let msg of messages" 
               [class.user-message]="msg.isUser"
               [class.bot-message]="!msg.isUser"
               class="message">
            {{ (msg.text) + (msg.timestamp.getHours()) + ":" + (msg.timestamp.getMinutes())}}
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

    </div>
  `,
  styles: [`
    .chatbot-container {
      position: fixed;
      bottom: 10px;
      right: 10px;
      z-index: 9999;
    }

    .chat-button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #002868;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
      transition: transform 0.2s;
    }

    .chat-button:hover {
      transform: scale(1.1);
    }

    .chat-window {
      background-color: white;
      margin: 0;
      position: fixed;
      bottom: 90px;
      right: 10px;
      width: 350px;
      height: 450px;
      border-radius: 25px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
}


    .chat-header {
      background: #002868;
      padding: 15px;
      border-radius: 16px 16px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: sans-serif;    }

    .chat-header h3 {
      color: white;
      margin: 0;
      font-size: 18px;
    }

    .close-btn {
      background: transparent;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      padding: 0;
      width: 30px;
      height: 30px;
    }

    .chat-body {
      padding: 15px;
      flex: 1;
      overflow-y: auto;
      background: #f5f5f5;
    }

    .message {
      margin-bottom: 12px;
      padding: 10px 14px;
      border-radius: 12px;
      max-width: 80%;
      word-wrap: break-word;
    }

    .user-message {
      background:#778FB5;
      color: white;
      margin-left: auto;
      text-align: right;

    }

    .bot-message {
      background: white;
      color: #333;
      margin-right: auto;
    }

    .chat-input {
      display: flex;
      padding: 12px;
      background: white;
      border-top: 1px solid #e0e0e0;
      border-radius: 0 0 16px 16px;
      gap: 8px;
    }

    .input-field {
      flex: 1;
      background: #f9f9f9;
      padding: 10px 14px;
      border: 1px solid #ddd;
      border-radius: 20px;
      outline: none;
      font-size: 14px;
    }

    .input-field:focus {
      border-color: #667eea;
    }

    .send-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #FBC621;
      border: none;
      color: white;
      font-size: 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .send-btn:hover {
      opacity: 0.9;
    }
  `]
})
export class ChatbotComponent {
  isOpen = false;
  userInput = '';
  messages: Message[] = [
    {
      text: '¡Hola! ¿En qué puedo ayudarte?',
      isUser: false,
      timestamp: new Date()
    }
  ];

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
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
        text: 'Gracias por tu mensaje. ¿En qué más puedo ayudarte?',
        isUser: false,
        timestamp: new Date()
      });
    }, 1000);
  }
}
