import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IQuestion, IAnswer, ICategory, IFAQ } from './data-types';

@Injectable({
  providedIn: 'root'
})
export class ChatbotDataService {

  private questionsUrl = "http://localhost:7256/api/questions";
  private answersUrl = "http://localhost:7256/api/answers";
  private categoriesUrl = "http://localhost:7256/api/categories";
  private chatbotUrl = "http://localhost:7256/api/chatbot";
  private faqUrl = "http://localhost:7256/api/FAQs";
  
  constructor(private http: HttpClient) { }

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
}
