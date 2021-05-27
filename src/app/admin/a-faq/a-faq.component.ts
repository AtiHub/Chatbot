import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFAQ } from 'src/app/data-types';
import { ChatbotDataService } from 'src/app/services/chatbot-data.service';

@Component({
  selector: 'app-a-faq',
  templateUrl: './a-faq.component.html',
  styleUrls: ['./a-faq.component.css']
})
export class AFaqComponent implements OnInit {
  
  public faqs: IFAQ[] = [];
  public selectedFaqId: number | null = null;

  public ids: string[] = [];
  public questionIds: string[] = [];

  public newQuestionId: string = "";

  constructor(private _chatbotDataService: ChatbotDataService, private router: Router) { }

  ngOnInit(): void {
    this._chatbotDataService.getFAQs().subscribe(data =>{
      this.faqs = data
      for(var x = 0; x < this.faqs.length; x += 1){
        this.ids.push(this.faqs[x].id + '');
        this.questionIds.push(this.faqs[x].questionId + '');
      }
    }, err => console.log(err));
  }

  select(event: any){
    var selectedFaqId = +event.target.closest('button').id;
    if(this.selectedFaqId == selectedFaqId) this.selectedFaqId = null;
    else this.selectedFaqId = selectedFaqId;
  }

  postFAQ() {
    this._chatbotDataService.postFAQ({questionId: +this.newQuestionId} as IFAQ).subscribe(data => {
        alert("FAQ Added!");
        this.router.navigate(['/']).then(() => { this.router.navigate(['/admin/faq']); });
    });
  }

  putFAQ(x: number){
    this._chatbotDataService.putFAQ(+this.ids[x], {id: +this.ids[x], questionId: +this.questionIds[x]} as IFAQ).subscribe(data => {
      alert("FAQ Editted!");
      this.router.navigate(['/']).then(() => { this.router.navigate(['/admin/faq']); });
    });
  }

  deleteFAQ(id: number) {
    this._chatbotDataService.deleteFAQ(id).subscribe(data => {
      alert("FAQ Deleted!");
      this.router.navigate(['/']).then(() => { this.router.navigate(['/admin/faq']); });
    });
  }

}
