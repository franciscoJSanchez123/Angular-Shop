import { Injectable, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItem:CartItem[]=[];
  cartChange:EventEmitter<CartItem[]>=new EventEmitter<CartItem[]>();

  constructor(
  ) { }


  getItem(){
    return this.cartItem.slice();
  }


  getItemIds(){
    return this.cartItem.map(item=> item.item._id);
  }


  addItem(item:CartItem){

      if(this.getItemIds().includes(item.item._id)){

        this.cartItem.map(cartItem=> {

            if(cartItem.item._id===item.item._id){

              cartItem.quantity+=item.quantity;

            }

        })
      }else{

        this.cartItem.push(item);
        
      }    


      this.cartChange.emit(this.cartItem.slice());
  }


  removeItem (item:CartItem){
    
    const index =this.cartItem.findIndex(elemt=>elemt===item); 

    this.cartItem.splice(index,1); 

    this.cartChange.emit(this.cartItem.slice()); 

  }


  uldateItemQuantity(item:CartItem,quantity:number){

    this.cartItem.map(cartItem => {

      if(cartItem.item._id===item.item._id){

        cartItem.quantity+=quantity
      }

    })

    this.cartChange.emit(this.cartItem.slice())

  }


  getTotal(){

    let total=0;

    this.cartItem.map(cartItem=>{

       total += (cartItem.item.price)*(cartItem.quantity)
    })

    return total;

  }


  clearCart(){
    this.cartItem=[]; 

    this.cartChange.emit(this.cartItem.slice()); 

  }

  
} 

