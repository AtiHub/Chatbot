import { Component, Input, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
import { ICategory, IQuestion } from 'src/app/data-types';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

  @Input() public displayQuestions: IQuestion[] = [];
  @Input() public isCategorySelected: boolean = false;
  @Input() public selectedCategory: ICategory | undefined = undefined;
  public selectedCategoryText: string = "";

  @Output() public closeCategoryEmitter = new EventEmitter();
  @Output() public chatbotEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(!(this.selectedCategory === undefined)) {
      this.selectedCategoryText = this.selectedCategory.text;
    }
  }

  askQuestion(question: IQuestion){
    this.chatbotEmitter.emit(question.text);
  }

  closeCategory(){
    this.closeCategoryEmitter.emit();
  }

}
