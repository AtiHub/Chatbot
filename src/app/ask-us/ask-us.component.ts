import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChatbotDataService } from '../chatbot-data.service';
import { ICategory, IFAQ, IMessage, IQuestion, IAskUs } from '../data-types';

@Component({
  selector: 'app-ask-us',
  templateUrl: './ask-us.component.html',
  styleUrls: ['./ask-us.component.css']
})
export class AskUsComponent implements OnInit {

  public askUsForm!: FormGroup;

  constructor(private _chatbotDataService: ChatbotDataService) { }

  ngOnInit(): void {
    this.askUsForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'text': new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }

  sendQuestion(){
    var newAskUs: IAskUs = {
      email: this.askUsForm.value.email,
      firstname: this.askUsForm.value.firstname,
      lastname: this.askUsForm.value.lastname,
      text: this.askUsForm.value.text,
      answered: false
    }
    this._chatbotDataService.postAskUs(newAskUs).subscribe(data => alert("Question Received"), err => console.log(err));
    this.askUsForm.reset();
  }

  get email() {
    return this.askUsForm.get('email');
  }

  get firstname() {
    return this.askUsForm.get('firstname');
  }

  get lastname() {
    return this.askUsForm.get('lastname');
  }

  get text() {
    return this.askUsForm.get('text');
  }

}
