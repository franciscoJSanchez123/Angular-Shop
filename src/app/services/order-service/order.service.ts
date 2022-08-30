import { Injectable, EventEmitter } from '@angular/core';
import {Order} from './../../models/order';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item';
import { User } from 'src/app/models/user';
import { Order2 } from 'src/app/models/order2';
import { Item2 } from 'src/app/models/item2';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url:string="https://nest-project.vercel.app/";
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

  order2:Order2={
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




 /**----------------------------------------------------------------------------------------------- */
  createOrder(user:User,items:CartItem[],total:number):Observable<Order2>{
    console.log(user)
    
    /*
    metodo anterior cuando trabajaba con el modelo Order
    this.order.user=user;
    this.order.items=items;
    this.order.total=total
    console.log(this.order)
    return this.http.post<Order>('http://localhost:3000/orders',this.order)*/

    /**--------------------------------------------------------------- */
    /*metodo actual trabando con el modelo Order2 */
    //lo que hacemos es convertir el arreglo items de tipo CartItem
    //en un arreglo de tipo item2 de esta forma podemos trabajar con
    //ordenes de tipo Order2
    
   let arreglo:any=[]
   items.map(data=>{
    
      let dato:any=data.item;
      dato.quantity=data.quantity
      arreglo.push(dato)
   })
   this.order2.user=user;
   this.order2.items=arreglo;
   this.order2.total=total
   /*return this.http.post<Order2>('http://localhost:3000/orders',this.order2)*/
   return this.http.post<Order2>(`${this.url}orders`,this.order2)

  }




 /**----------------------------------------------------------------------------------------- */
  findOrderById(id:string): Observable<Order2>{
    /*return this.http.get<Order2>('http://localhost:3000/orders/'+id)*/
    return this.http.get<Order2>(`${this.url}orders`+id)
  }
}
