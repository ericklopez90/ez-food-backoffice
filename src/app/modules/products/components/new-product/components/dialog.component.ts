import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'dialog',
    templateUrl: './dialog.html',
  })
  export class Dialog {
  
    constructor(
      public dialogRef: MatDialogRef<Dialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }
  
  export interface DialogData {
   ingredient:string
  }