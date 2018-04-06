import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private baseUrl: String = environment.url;
  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<any> {
    const json = JSON.stringify(user);
    const data = 'data=' + json;

    return this.http
      .post(`${this.baseUrl}` + 'signIn', data, {
        headers: this.getHeaders(),
        responseType: 'json'
      })
      .pipe(
        tap((res: Response) => {
          console.log(res);
        })
      );
  }
  getHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'text/plain',
      'Access-Control-Allow-Origin': '*'
    });

    return headers;
  }
}
