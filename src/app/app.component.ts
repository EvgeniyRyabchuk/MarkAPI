import {Component, OnInit} from '@angular/core';
import {HttpService} from '../shared/http.service';
import {Router} from '@angular/router';
import {NotifierService} from 'angular-notifier';
import {IUser, Tile} from '../shared/interfaces';
import {User} from '../shared/classes/user';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  private readonly notifier: NotifierService;
  showFiller = true;

  loggedIn = false;
  user: User;
  userTitle = 'Unauthorized';

  menuList = [
    {name: 'Home', url: '/', vsCond: undefined},
    {name: 'Login', url: '/login', vsCond: true},
    {name: 'Register', url: '/register', vsCond: true},
    {name: 'Dashboard', url: '/dashboard', vsCond: false},
    {name: 'Profile', url: '/profile', vsCond: false},
  ];



  constructor(private httpService: HttpService,  private router: Router, notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.httpService.subjectLg.subscribe((res: boolean) =>
    {
        this.loggedIn = res;
    });
    this.httpService.subjectUser.subscribe((res: IUser) => {
      this.user = res;
    });

    this.httpService.getUser().subscribe((res: IUser) =>
    {
      console.log(res);
      const newUser = new User(res);
      this.httpService.subjectUser.next(newUser);
      this.user = newUser;
      this.userTitle = 'Hello ' + this.user.name;
    },
    (error) =>
    {
      console.log(error);
      this.userTitle = 'Unauthorized';
      // localStorage.removeItem('token');
      // this.httpService.subjectLg.next(false);
      // this.router.navigate(['/login']);
    });

    this.loggedIn = localStorage.getItem('token') !== null;
    console.log('login: ' + this.loggedIn);

  }

  logout(): void {
    this.httpService.getTokenId().subscribe(
      res => {
        this.userTitle = 'Unauthorized';
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        this.httpService.subjectLg.next(false);
        console.log('login: ' + this.loggedIn);
        this.router.navigate(['/']);
      }, err =>
      {
        this.userTitle = 'Unauthorized';
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        this.httpService.subjectLg.next(false);
        console.log('login: ' + this.loggedIn);
        this.router.navigate(['/']);
      });


  }

  click(): void
  {

    this.httpService.show(1).subscribe(
      (res) =>
      {
        console.log(res);
        // this.notifier.show({
        //   type: 'success',
        //   message: 'You are awesome! I mean it!' + res.email,
        //   id: 'THAT_NOTIFICATION_ID', // Again, this is optional
        // });
        // console.log(res);
      },
      (err) => {
        console.log(err);
        this.notifier.show({
          type: 'error',
          message: 'You are awesome! I mean it!' + err,
          id: 'THAT_NOTIFICATION_ID', // Again, this is optional
        });
      }
    );
  }

  // client_id: this.httpService.subjectUser.getValue().id,
  refresh_token(): void
  {
    if (this.httpService.subjectLg) {
      const refresh_token = localStorage.getItem('refresh_token') ? localStorage.getItem('refresh_token') : undefined;
      console.log(`refresh token: ${refresh_token}`);
      if (refresh_token) {
        const data = {
          grant_type: 'refresh_token',
          refresh_token,
          client_id: 2,
          client_secret: 'ZwSqB3EZwS5C1kKF5wjiL0K4mhIGoaHry1O6xXbp',
          scope: '*'
        };
        this.httpService.refresh_token(data).subscribe(
          res => console.log(res)
        );
      }
      // this.httpService.show().subscribe(res => console.log(res));
    }
  }




  registration(): void
  {
    this.router.navigate(['/register']);
  }

  secure(): void
  {
    this.router.navigate(['/secure']);
  }

  password_forgot(): void
  {


  }

}
