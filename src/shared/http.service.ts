import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Router} from "@angular/router";
import { IUser, IUsers} from "./interfaces";
import {User} from "./classes/user";
import {AppModule} from "../app/app.module";

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  public subjectLg: Subject<boolean> = new Subject<boolean>();
  public $loggedIn = this.subjectLg.asObservable();

  public subjectUser: BehaviorSubject<User> = new BehaviorSubject<User>(User.me);
  public $subjectUser = this.subjectLg.asObservable();
  public staticUrl = 'https://swapi.dev/api/people/1/';
  constructor(private http: HttpClient, private router: Router) {

  }

  public getToken(data:any): Observable<any>
  {
    return this.http.get<any>(this.staticUrl);
  }

  public getUser(): Observable<IUser>
  {
    return this.http.get<IUser>(this.staticUrl);
  }

  public getTokenId(): Observable<any>
  {
    return this.http.get(this.staticUrl);
  }

  public remove_token(jti: any): Observable<any>
  {
    return this.http.delete(`http://localhost:8000/oauth/tokens/${jti}`);
  }

  public registerUser(data: any): Observable<any>
  {
    return this.http.post('http://localhost:8000/register', data);
  }

  public refresh_token(data:any): Observable<any>
  {
      return this.http.post(`http://localhost:8000/oauth/token/refresh`, data);
  }

  public password_forgot(data: any):  Observable<any>
  {
      return this.http.post('http://localhost:8000/forgot', data);
  }

  public password_reset(data: any): Observable<any>
  {
    return this.http.post('http://localhost:8000/reset', data);
  }

  public show(page: number): Observable<IUsers>
  {
    return this.http.get<IUsers>(`http://localhost:8000/show?page=${page}`);
  }


}
