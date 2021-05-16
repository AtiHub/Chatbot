import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ChatbotDataService } from '../chatbot-data.service';
import { ICategory, IFAQ, IMessage, IQuestion } from '../data-types';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  public faqs: IFAQ[] = [];
  public categories: ICategory[] = [];

  public selectedFaqId: number | null = null;

  constructor(private _chatbotDataService: ChatbotDataService) { }

  ngOnInit(): void {
    this._chatbotDataService.getFAQs().subscribe(data => this.faqs = data, err => console.log(err));
    this._chatbotDataService.getCategories().subscribe(data => this.categories = data, err => console.log(err));
  }

  select(event: any){
    var selectedFaqId = event.target.id;
    if(this.selectedFaqId == selectedFaqId) this.selectedFaqId = null;
    else this.selectedFaqId = selectedFaqId;
  }

}

@Pipe({
  name: 'filterFaq'
})
export class FaqPipe implements PipeTransform {
  public transform(value: any[], filter: number) {
    if (!filter) return value;
    var filteredList = value.filter(item => item.question.categoryId === filter);
    return filteredList;
  }
}
