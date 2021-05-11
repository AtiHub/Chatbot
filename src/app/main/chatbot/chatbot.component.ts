import { AfterViewChecked, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IMessage } from 'src/app/data-types';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit, AfterViewChecked {

  public inputText: string = "";
  @Input() public messages: IMessage[] = [];
  @Output() public chatbotEmitter = new EventEmitter();

  @ViewChild('container') container: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  askQuestion(text: any) {
    this.chatbotEmitter.emit(text);
    this.inputText = "";
  }

  scrollToBottom() {
    this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
  }

}
