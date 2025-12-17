import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  template: `
    <div style="position: fixed; bottom: 20px;
    right: 5px;
    width: 50px;
    height: 50px;
    background:#002868;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white; font-weight: bold;
    border-radius:50px;
    font-size: 7px;">
      CHATBOT 
    </div>
  `
})
export class ChatbotComponent { }
