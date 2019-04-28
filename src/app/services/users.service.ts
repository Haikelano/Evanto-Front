import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {error} from 'util';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  Url = 'http://www.localhost:8080/';

  constructor(private http: HttpClient) { }

  saveUser(data: any) {
     return this.http.post(this.Url + 'users/save', data);
     }

  verifUsername(username: any): Observable<any>  {
    return this.http.post(this.Url + 'users/verif', username);
  }
  getUserById(id: string) {
    return this.http.get(this.Url + 'users/' + id);
  }

  updateUser(id: string , data: any): Observable<any> {
    return this.http.put(this.Url + 'users/update/' + id, data);
  }
   getListUser(): Observable<any> {
    return this.http.get(this.Url + 'users');
  }

}
