import { Injectable, EventEmitter } from '@angular/core';
import {User} from './../../models/user';
import {Order} from './../../models/order'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  usuario:any="";
  user!:User;
  order:any=""
  orders:Order[]=[]
  userChange:EventEmitter<void>=new EventEmitter<void>();

  constructor() { }

  saveToken(token:string){
      localStorage.setItem('access_token',token);
  }

  getToken(){
      const token=localStorage.getItem('access_token');
      return token;
  }

  clearToken(){
      localStorage.removeItem("access_token");
  }

  saveUser(user:any){
      localStorage.setItem('user',JSON.stringify(user));
      this.userChange.emit();
  }

  async getUser(){
      this.usuario= localStorage.getItem('user');
      this.user= await JSON.parse(this.usuario);
      return this.user;
  }

  clearUser(){
      localStorage.removeItem("user");
      this.userChange.emit();
  }

  clearAll(){
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    this.userChange.emit();
  }

  saveOrders(orders:Order[]){
    localStorage.setItem('orders',JSON.stringify(orders));
  }

  async getOrders(){
    this.order=  localStorage.getItem('orders');
    this.orders= await JSON.parse(this.order);
    return this.orders;
  }
}
