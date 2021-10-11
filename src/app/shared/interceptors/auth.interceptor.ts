import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpService} from "../services/http.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private httpService: HttpService) {
  }

  // @ts-ignore
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (!request.url.includes('login')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.httpService.getToken()}`
        }
      });
      return next.handle(request);
    }
    return next.handle(request);
  }
}
