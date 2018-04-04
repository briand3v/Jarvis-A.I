import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DialogFlowService {
  private baseUrl: String = 'https://api.dialogflow.com/v1/query?v=20150910';
  private token: String = environment.token;

  constructor(private http: HttpClient) {}

  getResponse(query: string): Observable<any> {
    const data = {
      query: query,
      lang: 'en',
      sessionId: '12345'
    };
    return this.http
      .post(`${this.baseUrl}`, data, {
        headers: this.getHeaders()
      })
      .pipe(tap(res => res));
  }

  getHeaders() {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Bearer ${this.token}`
    });
    // const tokenValue = 'Bearer ' + this.token;
    // headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', tokenValue);
    return headers;
  }
}
