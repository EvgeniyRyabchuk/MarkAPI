import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DashboardService} from "../../../dashboard/dashboard.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {
  public addStorageForm = this.fb.group({ 
    name: ['', Validators.required],
    count: ['', Validators.required],
    provider: ['', Validators.required]
  });
  public storageItemId: number = 0;
  
  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<AddModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private notifierService: NotifierService,
              private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    if (this.data.method === 'edit') {
      this.storageItemId = this.data.initialValue.id;
      this.addStorageForm.controls.name.setValue(this.data.initialValue.name);
      this.addStorageForm.controls.count.setValue(this.data.initialValue.count);
      this.addStorageForm.controls.provider.setValue(this.data.initialValue.provider);
    }
  }

  public storageModalAction(method: string): void {
    if (method === 'add') {
      this.dashboardService.addStorageItem(this.addStorageForm.value)
        .subscribe(
          (res) => {
            this.notifierService.notify('success', 'Добавлено успешно!')
            this.dialogRef.close();
          },
          (error) => {

          })
    } else {
      this.dashboardService.editStorageItem(this.storageItemId, this.addStorageForm.value)
        .subscribe(
          (res) => {
            this.notifierService.notify('success', 'Успешно отредактировано!')
            this.dialogRef.close();
          },
          (error) => {

          })
    }
  }

}
