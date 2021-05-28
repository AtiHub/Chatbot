import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IUserDb } from '../data-types';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class UserService {
  public apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<IUserDb[]>(this.apiUrl + '/users');
  }

  getById(id: number) {
    return this.http.get<IUserDb>(this.apiUrl + '/users/' + id)
  }

  register(user: any) {
    return this.http.post(this.apiUrl + '/users/register', user);
  }

  update(id: number, user: any) {
    return this.http.put(this.apiUrl + '/users/' + id, user);
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + '/users/' + id);
  }
}
