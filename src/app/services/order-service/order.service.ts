import { Injectable, EventEmitter } from '@angular/core';
import {Order} from './../../models/order';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item';
import { User } from 'src/app/models/user';
import { Order2 } from 'src/app/models/order2';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order:Order={
    user:{
      name:"",
      password:"",
      email:"",
      ordersId:[]
    },
    items:[],
    total:0,
    status:""
  }

  ordersChange:EventEmitter<any>=new EventEmitter<any>()
  constructor(private http:HttpClient) { }

  createOrder(user:User,items:CartItem[],total:number):Observable<Order>{
    console.log(user)
    
    
    this.order.user=user;
    this.order.items=items;
    this.order.total=total
    console.log(this.order)
    return this.http.post<Order>('http://localhost:3000/orders',this.order)
  }

  findOrderById(id:string): Observable<Order2>{
    return this.http.get<Order2>('http://localhost:3000/orders/'+id)
  }
}
