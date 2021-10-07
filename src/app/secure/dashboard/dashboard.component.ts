import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../shared/http.service";
import {Router} from "@angular/router";
import {DataProviderService} from "../../../shared/DataProvider.service";
import {Hero, IUser, IUsers} from '../../../shared/interfaces';
import {User} from "../../../shared/classes/user";



import {HttpClient} from '@angular/common/http';
import { ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {HeroService} from '../../../shared/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, AfterViewInit {

  user: User;
  hero: Hero;
  heroes: Hero[] = [];

  constructor(private httpService: HttpService,
              private  router: Router,
              private _httpClient: HttpClient,
              private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.httpService.getUser().subscribe((res: IUser) =>
      {
        let newUser = new User(res);
        this.httpService.subjectUser.next(newUser);
        this.user = newUser;
      },
      (error) =>
      {
        // localStorage.removeItem('token');
        // this.httpService.subjectLg.next(false);
        // this.router.navigate(['/login']);
      });
  }

  ngAfterViewInit() {

  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => {

        });
    }
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDatabase {
  constructor(private _httpClient: HttpClient) { }

  getTableData(sort: string, order: SortDirection, page: number): Observable<IUsers> {
    const href = 'http://localhost:8000/show';
    const requestUrl =
      `${href}?page=${page+1}&sort=${sort}&order=${order}`;
    console.log(requestUrl);
    return this._httpClient.get<IUsers>(requestUrl);
  }
}
