import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StripeService, StripePaymentElementComponent } from 'ngx-stripe';
import {
  StripeElementsOptions,
  PaymentIntent
} from '@stripe/stripe-js'

@Component({
  selector: 'app-payments2',
  templateUrl: './payments2.component.html',
  styleUrls: ['./payments2.component.css']
})
export class Payments2Component implements OnInit {
  @ViewChild(StripePaymentElementComponent) paymentElement!: StripePaymentElementComponent;

  stripeTest = this.fb.group({
    name: ['Angular v12', [Validators.required]],
    amount: [1000, [Validators.required, Validators.pattern(/\d+/)]]
  });

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  paying = false;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private stripeService: StripeService
  ) { }

  ngOnInit(): void {
    this.createPaymentIntent(this.stripeTest.get('amount')!.value)
      .subscribe(pi => {
        this.elementsOptions.clientSecret! = pi.client_secret!;
        console.log('aqui create payment')
        console.log(this.elementsOptions.clientSecret)
      });
  }

  pay() {
    if (this.stripeTest.valid) {
      this.paying = true;
      this.stripeService.confirmPayment({
        elements: this.paymentElement.elements,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: this.stripeTest.get('name')!.value
            }
          }
        },
        redirect: 'if_required'
      }).subscribe(result => {
        this.paying = false;
        console.log('Result', result);
        if (result.error) {
          // Show error to your customer (e.g., insufficient funds)
          alert({ success: false, error: result.error.message });
        } else {
          // The payment has been processed!
          if (result.paymentIntent!.status === 'succeeded') {
            // Show a success message to your customer
            alert({ success: true });
          }
        }
      });
    } else {
      console.log(this.stripeTest);
    }
  }

  private createPaymentIntent(amount: number): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(
      `https://nest-project.vercel.app/payments/create-payment-intent`,
      { amount }
    );
  }

}
