import { NgModule } from '@angular/core';
import { MatDialogModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  exports: [
    MatSnackBarModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule {}
