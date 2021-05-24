import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatbotDataService } from '../services/chatbot-data.service';
import { ICategory, IMessage, IQuestion } from '../data-types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public categories: ICategory[] = [];
  public isCategorySelected:boolean = false;
  public selectedCategory: ICategory | undefined = undefined;
  public selectedCategoryId: number | null = null;

  public questions: IQuestion[] = [];
  public displayQuestions: IQuestion[] = [];

  public messages: IMessage[] = [];

  constructor(private _chatbotDataService: ChatbotDataService) { }

  ngOnInit(): void {
    this._chatbotDataService.getCategories().subscribe(data => this.categories = data, err => console.log(err));
    this._chatbotDataService.getQuestions().subscribe(data => {
      this.questions = data;
      this.setRandomQuestions();
    }, err => console.log(err));
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

  selectCategory($event: any) {
    this.selectedCategoryId = $event;
    this.selectedCategory = this.categories.find(x => x.id == this.selectedCategoryId);
    this.displayQuestions = this.questions.filter(x => x.categoryId == this.selectedCategoryId);
    this.isCategorySelected = true;
  }

  setRandomQuestions(){
    var arr = this.questions;
    var n = 15;
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    this.displayQuestions = result;
  }

  closeCategory(){
    this.selectedCategory = this.categories.find(x => x.id == this.selectedCategoryId);
    this.isCategorySelected = false;
    this.selectedCategoryId = null;
    this.selectedCategory = undefined;
    this.setRandomQuestions();
  }

  askQuestion($event: any){
    var questionText: string = $event;
    this._chatbotDataService.postChatbot(questionText).subscribe(data => {
      this.messages.push({by: 'user', text: questionText} as IMessage);
      setTimeout(() => this.messages.push({by: 'chatbot', text: data.text} as IMessage), 1000);
    }, err => console.log(err));
  }

}
