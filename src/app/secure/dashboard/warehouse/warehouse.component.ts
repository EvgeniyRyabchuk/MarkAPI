import { Component, OnInit } from '@angular/core';
import {Product} from '../../../../shared/interfaces';
import {DataProviderService} from '../../../../shared/DataProvider.service';



@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})




export class WarehouseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'quantity', 'provider'];
  dataSource: Product[] = DataProviderService.products;

  constructor() { }

  ngOnInit(): void {
  }

}
