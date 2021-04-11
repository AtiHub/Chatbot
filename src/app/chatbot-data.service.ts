import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IQuestion, IAnswer, ICategory } from './data-types';

@Injectable({
  providedIn: 'root'
})
export class ChatbotDataService {

  private questionsUrl = "http://localhost:7256/api/questions";
  private answersUrl = "http://localhost:7256/api/answers";
  private categoriesUrl = "http://localhost:7256/api/categories";
  private chatbotUrl = "http://localhost:7256/api/chatbot";
  
  constructor(private http: HttpClient) { }

  getCountries(): Observable<IQuestion[]>{
    return this.http.get<IQuestion[]>(this.questionsUrl);
  }
}
