import { Component, OnInit } from '@angular/core';
import {CartItem} from './../../../models/cart-item';
import {CartService} from '../../../services/cart-service/cart.service'

@Component({
  selector: 'app-nav-cart',
  templateUrl: './nav-cart.component.html',
  styleUrls: ['./nav-cart.component.css']
})
export class NavCartComponent implements OnInit {
  items:CartItem[]=[];
  total:number=0;
  constructor( private cartService:CartService) { }

  ngOnInit(): void {
    this.items=this.cartService.getItem();
    this.total=this.cartService.getTotal();
    this.cartService.cartChange.subscribe(cartItem=>{

      this.items=cartItem;
      this.total=this.cartService.getTotal();
    });
  }

  clearItem(item:CartItem){
    this.cartService.removeItem(item)
  }
  clearCart(){
    this.cartService.clearCart()
  }
 

}
