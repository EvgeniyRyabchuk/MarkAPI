import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../../shared/http.service";
import {Router} from "@angular/router";
import { MustMatch } from '../../../shared/_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //  ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  //
  //   if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
  //     return { 'ageRange': true };
  //   }
  //   return null;
  // }
  form: FormGroup;
  first_name = new FormControl('qwe', Validators.required);
  last_name = new FormControl('qwe', Validators.required);
  email = new FormControl('a@gmail.com', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(9)]);
  password_confirmation = new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder, private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        first_name: this.first_name,
        last_name: this.last_name,
        email:  this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        remeberMe: false
      },
      {validator: MustMatch('password', 'password_confirmation')}
    )
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.password.hasError('minLength'))
    {
      return 'Password must be at least 9 symbol';
    }
    let conPwdErr = this.password_confirmation.errors;
    // @ts-ignore
    if(conPwdErr) {
      if (conPwdErr.mustMatch === true) {
        return 'Enter same password!';
      }
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  submit():void
  {
    const formData = this.form.getRawValue();

    if(formData.remeberMe)
      console.log('remember')
    this.httpService.registerUser(formData).subscribe(
      result =>
      {
        const data = {
          username: formData.email,
          password: formData.password,
          grant_type: 'password',
          client_id: 2,
          client_secret: 'ZwSqB3EZwS5C1kKF5wjiL0K4mhIGoaHry1O6xXbp',
          scope: '*'
        };

        this.httpService.getToken(data).subscribe(
          (result: any) => {
            console.log('success');
            console.log(result);
            localStorage.setItem('token', result.access_token);
            localStorage.setItem('refresh_token', result.refresh_token);
            this.httpService.subjectLg.next(true);
            this.router.navigate(['/dashboard'])
          },
          error => {
            console.log('error');
            console.log(error);
          });

      },
        error => console.log(error)
    );
  }

}
