import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { IMessage } from 'src/app/data-types';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit, AfterViewChecked {

  public inputText: string = "";
  public messages: IMessage[] = [];

  @ViewChild('container') container: any;

  constructor() { }

  ngOnInit(): void {
    this.messages.push({by: 'chatbot', text: "Merhaba! Sormak istediğiniz bir soru var mı?"});
    this.messages.push({by: 'user', text: "Merhaba. Sormak istediğim bir soru var yok"});
    this.messages.push({by: 'chatbot', text: "Tamam o zaman."});
    this.messages.push({by: 'user', text: "Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı."});
    this.messages.push({by: 'chatbot', text: "Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat."});
    this.messages.push({by: 'user', text: "Merhaba. Sormak istediğim bir soru var yok"});
    this.messages.push({by: 'chatbot', text: "Tamam o zaman."});
    this.messages.push({by: 'user', text: "Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı."});
    this.messages.push({by: 'chatbot', text: "Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat."});
    this.messages.push({by: 'user', text: "Merhaba. Sormak istediğim bir soru var yok"});
    this.messages.push({by: 'chatbot', text: "Tamam o zaman."});
    this.messages.push({by: 'user', text: "Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı."});
    this.messages.push({by: 'chatbot', text: "Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat."});
    this.messages.push({by: 'user', text: "Merhaba. Sormak istediğim bir soru var yok"});
    this.messages.push({by: 'chatbot', text: "Tamam o zaman."});
    this.messages.push({by: 'user', text: "Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı. Çok uzun bir yazı."});
    this.messages.push({by: 'chatbot', text: "Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat. Çok uzun bir chat."});
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  public scrollToBottom() {
    this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
  }

}
