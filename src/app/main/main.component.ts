import { Component, OnInit } from '@angular/core';
import { ChatbotDataService } from '../chatbot-data.service';
import { ICategory, IQuestion } from '../data-types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public categories: ICategory[] = [];
  public selectedCategoryId: number | null = null;
  public selectedCategory: object | undefined = undefined;

  public questions: IQuestion[] = [];

  constructor(private _chatbotDataService: ChatbotDataService) { }

  ngOnInit(): void {
    this._chatbotDataService.getCategories().subscribe(data => this.categories = data, err => console.log(err));
    this._chatbotDataService.getQuestions().subscribe(data => this.questions = data, err => console.log(err));
  }

  selectCategory($event: any) {
    this.selectedCategoryId = $event;
    this.selectedCategory = this.categories.find(x => x.id == this.selectedCategoryId);
    
  }

}
