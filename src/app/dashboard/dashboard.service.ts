import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStorage} from "../shared/interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  // public domain = 'http://localhost:8000'; 
  public domain = 'https://41ce-192-162-140-52.ngrok.io'; 
  constructor(private http: HttpClient) {
  }

  public getStorageItems(): Observable<IStorage[]> {
    return this.http.get<IStorage[]>(`${this.domain}/storage`); 
  }

  public addStorageItem(body: any): Observable<any> {
    return this.http.post(`${this.domain}/storage`, body);
  }

  public editStorageItem(id: number, body: any): Observable<any> {
    return this.http.patch(`${this.domain}/storage/` + id, body);
  }

  public removeStorageItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.domain}/storage/` + id);
  }
}
