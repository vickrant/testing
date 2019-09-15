import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  exports:
  [
  MatFormFieldModule
  ],
  declarations: []
})
export class SharedModule { }
