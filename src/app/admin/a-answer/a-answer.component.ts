import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAnswer } from 'src/app/data-types';
import { ChatbotDataService } from 'src/app/services/chatbot-data.service';

@Component({
  selector: 'app-a-answer',
  templateUrl: './a-answer.component.html',
  styleUrls: ['./a-answer.component.css']
})
export class AAnswerComponent implements OnInit {
  
  public answers: IAnswer[] = [];
  public selectedAnswerId: number | null = null;

  public ids: string[] = [];
  public texts: string[] = [];

  public newText: string = "";

  constructor(private _chatbotDataService: ChatbotDataService, private router: Router) { }

  ngOnInit(): void {
    this._chatbotDataService.getAnswers().subscribe(data =>{
      this.answers = data
      for(var x = 0; x < this.answers.length; x += 1){
        this.ids.push(this.answers[x].id + '');
        this.texts.push(this.answers[x].text);
      }
    }, err => console.log(err));
  }

  select(event: any){
    var selectedAnswerId = +event.target.closest('button').id;
    if(this.selectedAnswerId == selectedAnswerId) this.selectedAnswerId = null;
    else this.selectedAnswerId = selectedAnswerId;
  }

  postAnswer() {
    this._chatbotDataService.postAnswer({text: this.newText} as IAnswer).subscribe(data => {
        alert("Answer Added!");
        this.router.navigate(['/']).then(() => { this.router.navigate(['/admin/answer']); });
    });
  }

  putAnswer(x: number){
    this._chatbotDataService.putAnswer(+this.ids[x], {id: +this.ids[x], text: this.texts[x]} as IAnswer).subscribe(data => {
      alert("Answer Editted!");
      this.router.navigate(['/']).then(() => { this.router.navigate(['/admin/answer']); });
    });
  }

  deleteAnswer(id: number) {
    this._chatbotDataService.deleteAnswer(id).subscribe(data => {
      alert("Answer Deleted!");
      this.router.navigate(['/']).then(() => { this.router.navigate(['/admin/answer']); });
    });
  }

}
