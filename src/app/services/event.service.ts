import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  Url = 'http://www.localhost:8080/';
  constructor(private httpClient: HttpClient) { }

  saveEvent( fd: FormData): Observable<any> {
    //const headers = new Headers({ 'Content-Type': 'multipart/form-data' });

    return this.httpClient.post(this.Url + 'event',  fd);
  }
  getListEvent(): Observable<any> {
    return this.httpClient.get(this.Url + 'event');
  }
}
