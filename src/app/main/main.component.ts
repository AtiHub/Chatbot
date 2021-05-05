import { Component, OnInit } from '@angular/core';
import { ChatbotDataService } from '../chatbot-data.service';
import { ICategory } from '../data-types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public categories: ICategory[] = [];

  constructor(private _chatbotDataService: ChatbotDataService) { }

  ngOnInit(): void {
    this._chatbotDataService.getCategories().subscribe(data => this.categories = data, err => console.log(err));
  }

}
