import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAskUs } from 'src/app/data-types';
import { ChatbotDataService } from 'src/app/services/chatbot-data.service';

@Component({
  selector: 'app-a-ask-us',
  templateUrl: './a-ask-us.component.html',
  styleUrls: ['./a-ask-us.component.css']
})
export class AAskUsComponent implements OnInit {
  
  public askUs: IAskUs[] = [];
  public selectedAskUsId: number | null = null;

  public ids: string[] = [];
  public emails: string[] = [];
  public firstnames: string[] = [];
  public lastnames: string[] = [];
  public texts: string[] = [];
  public answered: boolean[] = [];
  public answers: string[] = [];

  constructor(private _chatbotDataService: ChatbotDataService, private router: Router) { }

  ngOnInit(): void {
    this._chatbotDataService.getAskUs().subscribe(data =>{
      this.askUs = data
      for(var x = 0; x < this.askUs.length; x += 1){
        this.ids.push(this.askUs[x].id + '');
        this.emails.push(this.askUs[x].email);
        this.firstnames.push(this.askUs[x].firstname);
        this.lastnames.push(this.askUs[x].lastname);
        this.texts.push(this.askUs[x].text);
        this.answered.push(this.askUs[x].answered);
        this.answers.push(this.askUs[x].answer + '');
      }
    }, err => console.log(err));
  }

  select(event: any){
    var selectedAskUsId = +event.target.closest('button').id;
    if(this.selectedAskUsId == selectedAskUsId) this.selectedAskUsId = null;
    else this.selectedAskUsId = selectedAskUsId;
  }

  putAskUs(x: number){
    this._chatbotDataService.putAskUs(+this.ids[x], {
      id: +this.ids[x], email: this.emails[x], firstname: this.firstnames[x], lastname: this.lastnames[x], text: this.texts[x], answered: this.answered[x], answer: this.answers[x]
    } as IAskUs).subscribe(data => {
      alert("AskUs Editted!");
      this.router.navigate(['/']).then(() => { this.router.navigate(['/admin/askus']); });
    });
  }

  deleteAskUs(id: any) {
    this._chatbotDataService.deleteAskUs(id).subscribe(data => {
      alert("AskUs Deleted!");
      this.router.navigate(['/']).then(() => { this.router.navigate(['/admin/askus']); });
    });
  }

}
