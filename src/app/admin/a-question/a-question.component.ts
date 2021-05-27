import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IQuestion } from 'src/app/data-types';
import { ChatbotDataService } from 'src/app/services/chatbot-data.service';

@Component({
  selector: 'app-a-question',
  templateUrl: './a-question.component.html',
  styleUrls: ['./a-question.component.css']
})
export class AQuestionComponent implements OnInit {
  
  public questions: IQuestion[] = [];
  public selectedQuestionId: number | null = null;

  public ids: string[] = [];
  public answerIds: string[] = [];
  public categoryIds: string[] = [];
  public texts: string[] = [];

  public newCategoryId: string = "";
  public newAnswerId: string = "";
  public newText: string = "";

  constructor(private _chatbotDataService: ChatbotDataService, private router: Router) { }

  ngOnInit(): void {
    this._chatbotDataService.getQuestions().subscribe(data =>{
      this.questions = data
      for(var x = 0; x < this.questions.length; x += 1){
        this.ids.push(this.questions[x].id + '');
        this.answerIds.push(this.questions[x].answerId + '');
        this.categoryIds.push(this.questions[x].categoryId + '');
        this.texts.push(this.questions[x].text);
      }
    }, err => console.log(err));
  }

  select(event: any){
    var selectedQuestionId = +event.target.closest('button').id;
    if(this.selectedQuestionId == selectedQuestionId) this.selectedQuestionId = null;
    else this.selectedQuestionId = selectedQuestionId;
  }

  postQuestion() {
    this._chatbotDataService.postQuestion({categoryId: +this.newCategoryId, answerId: +this.newAnswerId, text: this.newText} as IQuestion).subscribe(data => {
        alert("Question Added!");
        this.router.navigate(['/']).then(() => { this.router.navigate(['/admin/question']); });
    });
  }

  putQuestion(x: number){
    this._chatbotDataService.putQuestion(+this.ids[x], {id: +this.ids[x], categoryId: +this.categoryIds[x], answerId: +this.answerIds[x], text: this.texts[x]} as IQuestion).subscribe(data => {
      alert("Question Editted!");
      this.router.navigate(['/']).then(() => { this.router.navigate(['/admin/question']); });
    });
  }

  deleteQuestion(id: number) {
    this._chatbotDataService.deleteQuestion(id).subscribe(data => {
      alert("Question Deleted!");
      this.router.navigate(['/']).then(() => { this.router.navigate(['/admin/question']); });
    });
  }

}
