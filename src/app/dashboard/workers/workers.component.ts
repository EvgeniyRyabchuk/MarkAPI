import { Component, OnInit } from '@angular/core';
const ELEMENT_DATA = [
  {id: 1, name: 'KOLIYA', position: 'WORKER', rate: '200'},
  {id: 2, name: 'KOLIYA', position: 'WORKER', rate: '200'},
  {id: 3, name: 'KOLIYA', position: 'WORKER', rate: '200'},
  {id: 4, name: 'KOLIYA', position: 'WORKER', rate: '200'},
  {id: 5, name: 'KOLIYA', position: 'WORKER', rate: '200'},
  {id: 6, name: 'KOLIYA', position: 'WORKER', rate: '200'},
  {id: 7, name: 'KOLIYA', position: 'WORKER', rate: '200'},
  {id: 8, name: 'KOLIYA', position: 'WORKER', rate: '200'},
];

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {
  public displayedColumns = ['id', 'name', 'position', 'rate'];
  public dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
