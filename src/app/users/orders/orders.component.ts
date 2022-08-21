import { Component, OnInit } from '@angular/core';
import {Order } from './../../models/order';
import {User} from './../../models/user'
import {OrderService} from './../../services/order-service/order.service';
import {LocalStorageService} from './../../services/localStorage-service/local-storage.service'
import { CartItem } from 'src/app/models/cart-item';
import { Order2 } from 'src/app/models/order2';
import { AuthService } from 'src/app/services/auth-service/auth.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  ordersId:string[] |undefined=[]
  orders:Order2[]=[];
  user!:User;
 
  constructor(
    private orderService:OrderService,
    private localStorageService:LocalStorageService,
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
    
    this.getUser();
    this.localStorageService.userChange.subscribe(()=>{
      this.getUser(); 
    })

    this.authService.userAuth.subscribe(data=>{
      
    })
    

  }
//--------------------------------------------------------------------------------------------
  async getUser(){
    this.user= await this.localStorageService.getUser()
    this.ordersId=this.user.ordersId

    this.ordersId?.map(orderId=>{
      this.orderService.findOrderById(orderId).subscribe(order=>{
        this.orders.push(order)
      })  
    })
  }

}
