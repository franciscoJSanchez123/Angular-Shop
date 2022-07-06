import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Payments2RoutingModule } from './payments2-routing.module';
import { Payments2Component } from './payments2.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [
    Payments2Component
  ],
  imports: [
    CommonModule,
    Payments2RoutingModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_51KsX4oBUzx4xxmQHjCgtllKIk6u8q0q9BpluyaPfc8AocbU5Jg9f3nhItJDoxBNzbaosk3biSdXHW9ZtXRqifpMN00J9WTj5OV'),
    AngularMaterialModule
  ]
})
export class Payments2Module { }
