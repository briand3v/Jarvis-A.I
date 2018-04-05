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

  createUser(user: User) {
    return this.http
      .post(`${this.baseUrl}` + 'singIn', user, { headers: this.getHeaders() })
      .pipe(tap(res => console.log(res)));
  }
  getHeaders() {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    });

    return headers;
  }
}
