import { Component, Input, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/data-types';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

  @Input() public questions: IQuestion[] = [];
  public isSelectedCategory: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  askQuestion(event: any){

  }

}
