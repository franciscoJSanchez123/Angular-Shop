import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { NgxStripeModule } from 'ngx-stripe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaymentsComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_51KsX4oBUzx4xxmQHjCgtllKIk6u8q0q9BpluyaPfc8AocbU5Jg9f3nhItJDoxBNzbaosk3biSdXHW9ZtXRqifpMN00J9WTj5OV')
  ]
})
export class PaymentsModule { }
