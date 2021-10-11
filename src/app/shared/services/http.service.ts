import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  //public domain = 'http://localhost:8000/auth/login/'; 
  public domain = 'https://41ce-192-162-140-52.ngrok.io/'; 
  constructor(private http: HttpClient) {
  }

  public getToken(): any {
    return <string>localStorage.getItem('token');
  }

  public login(body: any): Observable<any> {
    console.log(body);
    // return this.http.post('http://b1f7-192-162-140-67.ngrok.io/auth/login', body);
    return this.http.post(`${this.domain}auth/login`, body);
  }
}
