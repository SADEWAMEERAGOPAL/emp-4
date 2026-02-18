import { NgModule } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

let materialArr=[
     MatSnackBarModule,
     MatDialogModule,
     MatProgressSpinnerModule,
     MatCardModule,
     MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
   ...materialArr
  ],
  exports: [
    ...materialArr
  ]
})
export class MaterialModule { }
