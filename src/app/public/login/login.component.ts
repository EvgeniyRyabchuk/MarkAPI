import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {HttpService} from "../../../shared/http.service";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  log_data:any = localStorage.getItem('remember_login_data');
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',  Validators.required);
  hidePwd = true;
  rememberMe = localStorage.getItem('rememberMe') == 'true' ? true : false;

  constructor(private fb: FormBuilder,
              private httpService: HttpService,
              private router: Router, private notifyService: NotifierService) { }

  ngOnInit(): void {
    if(this.log_data)
    {
      this.form = this.fb.group({
        email: JSON.parse(this.log_data).email ? JSON.parse(this.log_data).email : '',
        password: JSON.parse(this.log_data).password ? JSON.parse(this.log_data).password : '',
        rememberMe: this.rememberMe
      });
    }
    else {
      this.form = this.fb.group({
        email: '',
        password: '',
        rememberMe: this.rememberMe
      });
    }

  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  submit():void
  {
    const formData = this.form.getRawValue();

    const data = {
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'ZwSqB3EZwS5C1kKF5wjiL0K4mhIGoaHry1O6xXbp',
      scope: '*'
    };
    this.notifyService.notify('success', 'Вы успешно вошли!');
    const token = 'K5435hkldfhglkhjlkdfhj';
    console.log('success');
    console.log(token);
    localStorage.setItem('token', token);
    localStorage.setItem('refresh_token', token);
    this.httpService.subjectLg.next(true);

    if(formData.rememberMe == true)
    {
      let obj = { email: formData.email, password: formData.password }
      localStorage.setItem('remember_login_data', JSON.stringify(obj));
      localStorage.setItem('rememberMe', 'true');
      console.log('saved');
    }
    else
    {
      localStorage.setItem('rememberMe', 'false');
      localStorage.removeItem('remember_login_data');
      console.log('not saved');
    }

    this.router.navigate(['/dashboard']);

    // this.httpService.getToken(data).subscribe(
    //   (result: any) => {
    //
    //   },
    //   error => {
    //     this.notifyService.notify('error', 'Вы ввели не верные данные');
    //     console.log('error');
    //     console.log(error);
    //   });
  }


}
