import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

import {FormsModule} from '@angular/forms'
import { NgxStripeModule } from 'ngx-stripe';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    NgxStripeModule.forRoot('pk_test_51KsX4oBUzx4xxmQHjCgtllKIk6u8q0q9BpluyaPfc8AocbU5Jg9f3nhItJDoxBNzbaosk3biSdXHW9ZtXRqifpMN00J9WTj5OV'),

  ]
})
export class CartModule { }
