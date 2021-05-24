import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IQuestion, IAnswer, ICategory, IFAQ, IAskUs } from '../data-types';
import { AuthenticationService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChatbotDataService {

  private questionsUrl = "http://localhost:7256/api/questions";
  private answersUrl = "http://localhost:7256/api/answers";
  private categoriesUrl = "http://localhost:7256/api/categories";
  private chatbotUrl = "http://localhost:7256/api/chatbot";
  private faqUrl = "http://localhost:7256/api/FAQs";
  private askUsUrl = "http://localhost:7256/api/askUs";
  
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getCategories(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.categoriesUrl);
  }

  getQuestions(): Observable<IQuestion[]>{
    return this.http.get<IQuestion[]>(this.questionsUrl);
  }

  getQuestionsByCategoryId(id: number): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>(this.questionsUrl + "/byCategoryId/" + id)
  }

  postChatbot(questionText: string) {
    return this.http.post<IAnswer>(this.chatbotUrl, {text: questionText});
  }

  getFAQs(): Observable<IFAQ[]> {
    return this.http.get<IFAQ[]>(this.faqUrl);
  }

  getAskUs(): Observable<IAskUs[]> {
    return this.http.get<IAskUs[]>(this.askUsUrl);
  }

  postAskUs(askUs: IAskUs){
    return this.http.post<IAskUs>(this.askUsUrl, askUs);
  }

  answerAskUs(id: number, answer: string) {
    var currentUser = this.authenticationService.currentUserValue;
    return this.http.post<IAskUs>(this.askUsUrl + "/" + id, {AnsweredBy: currentUser.firstName + " " + currentUser.lastName, Text: answer});
  }
}
