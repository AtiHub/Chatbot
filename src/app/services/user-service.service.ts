import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../data-types';
import { apiUrl } from '../urls';

@Injectable({ providedIn: 'root' })
export class UserService {
  public apiUrl = apiUrl;
  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<IUser[]>(this.apiUrl + '/users');
  }

  getById(id: number) {
    return this.http.get<IUser>(this.apiUrl + '/users/' + id)
  }

  register(user: IUser) {
    return this.http.post(this.apiUrl + '/users/register', user);
  }

  update(id: number, user: IUser) {
    return this.http.put(this.apiUrl + '/users/' + id, user);
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + '/users/' + id);
  }
}
