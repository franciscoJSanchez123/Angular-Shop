import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'

import {CartItem} from './../models/cart-item';
import {User} from './../models/user';
import {Order} from './../models/order';

import {CartService} from './../services/cart-service/cart.service';
import {AuthService} from './../services/auth-service/auth.service';
import {OrderService} from './../services/order-service/order.service';
import {LocalStorageService} from './../services/localStorage-service/local-storage.service'


//----------------------------------------------------------------
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

import { StripeService } from 'ngx-stripe';
//----------------------------------------------------------------


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items:CartItem[]=[];
  total:number=0;
  user!:User;
  usuario:any=""
  

  constructor(
    private cartService:CartService,
    private authService:AuthService,
    private orderService:OrderService,
    private localStorageService:LocalStorageService,
    private router:Router,

    //-------------------------------------------
    private http: HttpClient,
    private stripeService: StripeService
    //-------------------------------------------
  
    ) { }

  ngOnInit(): void {

    this.items=this.cartService.getItem();
    this.total=this.cartService.getTotal();
    this.cartService.cartChange.subscribe(cartItem=>{

      this.items=cartItem;
      this.total=this.cartService.getTotal();
      console.log(this.items)
    });

    
  }

 //--------------------------------------------------------------------------------------------


  updateQuantity(item:CartItem,quantity:number){

      if (item.quantity<=1 && quantity===-1){
        item.quantity=1;

      }else{
        this.cartService.uldateItemQuantity(item,quantity);
      }
      
  }


 //--------------------------------------------------------------------------------------------

  clearItem(item:CartItem){
    this.cartService.removeItem(item);
  }

 //--------------------------------------------------------------------------------------------

  clearCart(){
    this.cartService.clearCart();
  }


  //--------------------------------------------------------------------------------------------

  async buy(){
    console.log("aqui cart buy")
    
    this.user= await this.localStorageService.getUser()
    console.log(this.user)
    console.log("aqui cart buy")
    if (this.user){
       this.orderService.createOrder(this.user,this.items,this.total).subscribe(async(data)=>{
        
        const user:any=await this.localStorageService.getUser();
        this.authService.findUserById(user._id)
        this.router.navigate(['/success'])
        
       });
       
    }else{
        this.router.navigate(['/signin']);
    }
  }

  //--------------------------------------------------------------------------------------------
  
  checkout() {
    // Check the server.js tab to see an example implementation
    this.http.post('http://localhost:3000/payments/create-checkout-session', {})
      .pipe(
        switchMap((session:any) => {
          return this.stripeService.redirectToCheckout({ sessionId: session.id })
        })
      )
      .subscribe(result => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      });
  }

  //------------------------------------------------------

}
