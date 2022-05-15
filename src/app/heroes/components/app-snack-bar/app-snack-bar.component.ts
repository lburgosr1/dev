import { Component, Inject } from '@angular/core';
import {MatSnackBarRef, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';


@Component({
    selector: 'app-snack-bar',
    templateUrl: 'app-snack-bar.component.html',
    styleUrls: ['app-snack-bar.component.css'],
})
export class AppSnackBarComponent {
    constructor(
        public snackBarRef: MatSnackBarRef<AppSnackBarComponent>,
        @Inject(MAT_SNACK_BAR_DATA) public data: any,
    ) { }
}
