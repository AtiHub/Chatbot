import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IAnswer, IAskUs, ICategory, IFAQ, IQuestion, IUserDb } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public categories: Subject<ICategory[]> = new BehaviorSubject<ICategory[]>([]);
  public questions: Subject<IQuestion[]> = new BehaviorSubject<IQuestion[]>([]);
  public answers: Subject<IAnswer[]> = new BehaviorSubject<IAnswer[]>([]);
  public faqs: Subject<IFAQ[]> = new BehaviorSubject<IFAQ[]>([]);
  public askus: Subject<IAskUs[]> = new BehaviorSubject<IAskUs[]>([]);
  public users: Subject<IUserDb[]> = new BehaviorSubject<IUserDb[]>([]);
  
  addCategories(data: ICategory[]) {
    this.categories.next(data);
  }

  addQuestions(data: IQuestion[]) {
    this.questions.next(data);
  }

  addAnswers(data: IAnswer[]) {
    this.answers.next(data);
  }

  addFaqs(data: IFAQ[]) {
    this.faqs.next(data);
  }

  addAskUs(data: IAskUs[]) {
    this.askus.next(data);
  }

  addUsers(data: IUserDb[]) {
    this.users.next(data);
  }
}
