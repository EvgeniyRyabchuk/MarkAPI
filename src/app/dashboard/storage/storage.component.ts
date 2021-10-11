import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../dashboard.service";
import {IStorage} from "../../shared/interfaces/interfaces";
import {MatDialog} from "@angular/material/dialog";
import {AddModalComponent} from "../../shared/components/add-modal/add-modal.component";

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {
  public displayedColumns = ['id', 'name', 'count', 'provider', 'actions'];
  public dataSource: IStorage[] = [];

  constructor(private dashboardService: DashboardService, public dialog: MatDialog) 
  {
    
  }

  ngOnInit(): void {
    this.getAndSetStorageItems();
  }

  public getAndSetStorageItems(): void {
    this.dashboardService.getStorageItems().subscribe((res: IStorage[]) => {
      this.dataSource = res;
    });
  }

  public deleteStorageItem(id: number): void {
    this.dashboardService.removeStorageItem(id).subscribe(res => {
      this.dataSource = res;
    })
  }

  public openDialog(method: 'edit' | 'add', dataToEdit?: any): void {
    const dialogRef = this.dialog.open(AddModalComponent, { 
      data: {
        method: method,
        initialValue: dataToEdit
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAndSetStorageItems(); 
    });
  }

}
