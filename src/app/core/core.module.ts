import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpConfigInterceptor } from '../core/interceptors/httpconfig.interceptor';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';


@NgModule({
  
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports:
  [
  MatDialogModule,
  FormsModule,
  ReactiveFormsModule
  ],

  declarations: [],

  providers: [
     { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
     { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
       JwtHelperService
  ]

})
export class CoreModule { }
