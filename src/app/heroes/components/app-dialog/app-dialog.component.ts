import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';


@Component({
    selector: 'app-dialog',
    templateUrl: 'app-dialog.component.html'
})
export class AppDialogComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data: Heroe, 
                private dialogRef: MatDialogRef<AppDialogComponent>){}

    ngOnInit() {

    }

    delete() {
        this.dialogRef.close(true);
    }

    cancel() {
        this.dialogRef.close();
    }
}