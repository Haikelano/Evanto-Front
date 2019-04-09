import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  Url: string = 'http://localhost:8080/';
  saveUser(data: any) {
    return this.http.post(this.Url + '/users/save', data).subscribe(
      (value: any) => console.log('Save Succus')
    );
  }
}
