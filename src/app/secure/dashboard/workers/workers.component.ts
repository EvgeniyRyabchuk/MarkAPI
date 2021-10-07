import { Component, OnInit } from '@angular/core';
import {Workers} from '../../../../shared/interfaces';
import {DataProviderService} from '../../../../shared/DataProvider.service';


@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})

export class WorkersComponent implements OnInit {

  displayedColumns = ['id', 'fio', 'position', 'rate'];
  dataSource: Workers[] = DataProviderService.workers;

  constructor() { }

  ngOnInit(): void {
  }

}
