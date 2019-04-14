import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {error} from 'util';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  id: string = 'cb2594122b19416427d20a2';
  Url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  saveUser(data: any) {
     return this.http.post(this.Url + 'users/save', data);
     }

  verifUsername(username: any): Observable<Object>  {
    return this.http.post(this.Url + 'users/verif', username);
  }

}
