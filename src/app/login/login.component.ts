import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {HttpService} from "../shared/services/http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: string = '';
  public password: string = '';
  public obj = {
    login: 'qwerty',
    password: '12345'
  }

  constructor(private router: Router,
              private httpService: HttpService,
              private notifierService: NotifierService) {
  }

  ngOnInit(): void {
  }

  public checkLogin(): void {
    this.httpService.login({email: this.login, password: this.password}).subscribe(res => {
      console.log('s');
      if (res.token) {
        localStorage.setItem('token', res.token);
        this.notifierService.notify('success', 'Логин успешен!');
        this.router.navigate(['dashboard', 'storage']);
      }
    })

  }
}
