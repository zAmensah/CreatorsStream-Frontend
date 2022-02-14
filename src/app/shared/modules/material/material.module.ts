import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const modules = [MatSnackBarModule, MatButtonModule, MatIconModule];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [...modules],
})
export class MaterialModule {}
