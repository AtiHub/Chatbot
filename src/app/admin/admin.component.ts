import { Component, OnInit } from '@angular/core';
import { IAnswer, ICategory, IFAQ, IQuestion, IAskUs, IUserDb } from '../data-types';
import { ChatbotDataService } from '../services/chatbot-data.service';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  public categories: ICategory[] = [];
  public questions: IQuestion[] = [];
  public answers: IAnswer[] = [];
  public faqs: IFAQ[] = [];
  public askus: IAskUs[] = [];
  public users: IUserDb[] = [];

  constructor(private _chatbotDataService: ChatbotDataService, private _userService: UserService) { }

  ngOnInit(): void {
    this._chatbotDataService.getCategories().subscribe(data => this.categories = data, err => console.log(err));
    this._chatbotDataService.getQuestions().subscribe(data => this.questions = data, err => console.log(err));
    this._chatbotDataService.getAnswers().subscribe(data => this.answers = data, err => console.log(err));
    this._chatbotDataService.getFAQs().subscribe(data => this.faqs = data, err => console.log(err));
    this._chatbotDataService.getAskUs().subscribe(data => this.askus = data, err => console.log(err));
    this._userService.getAll().subscribe(data => this.users = data, err => console.log(err));
  }

}
