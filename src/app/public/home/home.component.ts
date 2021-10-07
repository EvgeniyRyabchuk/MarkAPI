import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../../../shared/http.service";
import {Tile} from "../../../shared/interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loggedIn:boolean = false;
  constructor(private router: Router, private httpService: HttpService) { }

  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 3, color: '#DDBDF1'},
    {text: 'Four', cols: 2, rows: 3, color: '#DDBDF1'},
  ];

  ngOnInit(): void {
    this.httpService.subjectLg.subscribe((res: boolean) =>
    {
      this.loggedIn = res;
    });

    this.httpService.subjectLg.next(localStorage.getItem('token') !== null);
    console.log('login: ' + this.loggedIn);

  }

  click():void
  {
    this.httpService.subjectLg.next(true);
    //this.router.navigate(['/login']);
  }


}
