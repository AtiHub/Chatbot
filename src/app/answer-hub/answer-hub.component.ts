import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAskUs } from '../data-types';
import { ChatbotDataService } from '../services/chatbot-data.service';

@Component({
  selector: 'app-answer-hub',
  templateUrl: './answer-hub.component.html',
  styleUrls: ['./answer-hub.component.css']
})
export class AnswerHubComponent implements OnInit {

  public askUsQuestions: IAskUs[] = [];
  public nonAnswered: IAskUs[] = [];
  public answered: IAskUs[] = [];

  public selectedAskUsId: number | null = null;
  public nonAnsweredTextareas: string[] = [];
  public answeredTextareas: string[] = [];

  constructor(private _chatbotDataService: ChatbotDataService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._chatbotDataService.getAskUs().subscribe(data => {
      this.askUsQuestions = data.reverse();
      this.nonAnswered = this.askUsQuestions.filter(q => !q.answered);
      this.answered = this.askUsQuestions.filter(q => q.answered);
      for(var x = 0; x < this.nonAnswered.length; x += 1) this.nonAnsweredTextareas.push("");
      for(var x = 0; x < this.answered.length; x += 1) this.answeredTextareas.push("");
    }, err => console.log(err));
  }

  select(event: any){
    var selectedAskUsId = +event.target.closest('button').id;
    if(this.selectedAskUsId == selectedAskUsId) this.selectedAskUsId = null;
    else this.selectedAskUsId = selectedAskUsId;
  }

  sendAnswer(id: any, x: number, answered: boolean){
    this._chatbotDataService.answerAskUs(id, (answered ? this.answeredTextareas[x]: this.nonAnsweredTextareas[x])).subscribe(data => {
      alert("Answer sent!");
      this.router.navigate(['/']).then(() => { this.router.navigate(['/answerhub']); });
    }, err => console.log(err));
  }
}
