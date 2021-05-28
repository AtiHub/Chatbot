import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IQuestion, IAnswer, ICategory, IFAQ, IAskUs, IUser, IUserDb } from '../data-types';
import { AuthenticationService } from './authentication-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatbotDataService {

  public apiUrl = environment.apiUrl;

  private questionsUrl = this.apiUrl + "/questions";
  private answersUrl = this.apiUrl + "/answers";
  private categoriesUrl = this.apiUrl + "/categories";
  private chatbotUrl = this.apiUrl + "/chatbot";
  private faqUrl = this.apiUrl + "/FAQs";
  private askUsUrl = this.apiUrl + "/askUs";
  private userUrl = this.apiUrl + "/users";
  
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  //CATEGORY
  getCategories(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.categoriesUrl);
  }
  
  postCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(this.categoriesUrl, {text: category.text});
  }

  putCategory(id: number, category: ICategory) {
    return this.http.put<ICategory>(this.categoriesUrl + "/" + id, {id: category.id, text: category.text});
  }

  deleteCategory(id: number) {
    return this.http.delete<ICategory>(this.categoriesUrl + "/" + id);
  }

  //QUESTION
  getQuestions(): Observable<IQuestion[]>{
    return this.http.get<IQuestion[]>(this.questionsUrl);
  }

  getQuestionsByCategoryId(id: number): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>(this.questionsUrl + "/byCategoryId/" + id);
  }

  postQuestion(question: IQuestion): Observable<IQuestion> {
    return this.http.post<IQuestion>(this.questionsUrl, {categoryId: question.categoryId, answerId: question.answerId, text: question.text});
  }

  putQuestion(id: number, question: IQuestion) {
    return this.http.put<IQuestion>(this.questionsUrl + "/" + id, {id: question.id, categoryId: question.categoryId, answerId: question.answerId, text: question.text});
  }

  deleteQuestion(id: number) {
    return this.http.delete<IQuestion>(this.questionsUrl + "/" + id);
  }

  //ANSWER
  getAnswers(): Observable<IAnswer[]>{
    return this.http.get<IAnswer[]>(this.answersUrl);
  }
  
  postAnswer(answer: IAnswer): Observable<IAnswer> {
    return this.http.post<IAnswer>(this.answersUrl, {text: answer.text});
  }

  putAnswer(id: number, answer: IAnswer) {
    return this.http.put<IAnswer>(this.answersUrl + "/" + id, {id: answer.id, text: answer.text});
  }

  deleteAnswer(id: number) {
    return this.http.delete<IAnswer>(this.answersUrl + "/" + id);
  }

  //FAQ
  getFAQs(): Observable<IFAQ[]> {
    return this.http.get<IFAQ[]>(this.faqUrl);
  }

  postFAQ(faq: IFAQ): Observable<IFAQ> {
    return this.http.post<IFAQ>(this.faqUrl, {questionId: faq.questionId});
  }

  putFAQ(id: number, faq: IFAQ) {
    return this.http.put<IFAQ>(this.faqUrl + "/" + id, {id: faq.id, questionId: faq.questionId});
  }

  deleteFAQ(id: number) {
    return this.http.delete<IFAQ>(this.faqUrl + "/" + id);
  }

  //ASKUS
  getAskUs(): Observable<IAskUs[]> {
    return this.http.get<IAskUs[]>(this.askUsUrl);
  }

  postAskUs(askUs: IAskUs){
    return this.http.post<IAskUs>(this.askUsUrl, askUs);
  }

  putAskUs(id: number, askUs: IAskUs) {
    return this.http.put<IAskUs>(this.askUsUrl + "/" + id, askUs);
  }

  deleteAskUs(id: number) {
    return this.http.delete<IAskUs>(this.askUsUrl + "/" + id);
  }

  answerAskUs(id: number, answer: string) {
    var currentUser = this.authenticationService.currentUserValue;
    return this.http.post<IAskUs>(this.askUsUrl + "/" + id, {AnsweredBy: currentUser.firstName + " " + currentUser.lastName, Text: answer});
  }
  
  //CHATBOT
  postChatbot(questionText: string) {
    return this.http.post<IAnswer>(this.chatbotUrl, {text: questionText});
  }
}
