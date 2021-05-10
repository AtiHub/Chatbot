import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatbotDataService } from '../chatbot-data.service';
import { ICategory, IQuestion } from '../data-types';

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

  constructor(private _chatbotDataService: ChatbotDataService) { }

  ngOnInit(): void {
    this._chatbotDataService.getCategories().subscribe(data => this.categories = data, err => console.log(err));
    this._chatbotDataService.getQuestions().subscribe(data => {
      this.questions = data;
      this.setRandomQuestions();}, err => console.log(err));
  }

  selectCategory($event: any) {
    this.selectedCategoryId = $event;
    this.selectedCategory = this.categories.find(x => x.id == this.selectedCategoryId);
    this.displayQuestions = this.questions.filter(x => x.categoryId == this.selectedCategoryId);
    this.isCategorySelected = true;
  }

  setRandomQuestions(){
    var arr = this.questions;
    var n = 10;
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

}
