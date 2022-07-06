import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {ItemService} from './../../services/item-service/item.service';
import {CartService} from '../../services/cart-service/cart.service';

import {Item} from '../../models/item';
import {CartItem} from '../../models/cart-item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {


  item!:Item;
  imgs:string[]=[];
  imgActive:string=""
  Quantity:number=1;



  constructor(
    private activedRoute:ActivatedRoute,
    private itemService:ItemService,
    private cartservice:CartService
    
  ) { }



  ngOnInit(): void {
    this.activedRoute.params.subscribe(param=>{
      const itemId=param._id;
      console.log(itemId)
      this.findItemById(itemId);

    })
  }



  findItemById(id:string){
    this.itemService.findId(id).subscribe(data=>{
      this.item=data;
      this.imgs=data.imgsUrls;
      this.imgActive=data.img;
    })
  }

  updateQuantity(n:number){
    if (this.Quantity<=1 && n===-1) {
      this.Quantity=1
    }else{
      this.Quantity += n
    }

  }

  addItem(item:Item){
    console.log("aqui additem")
    this.cartservice.addItem(new CartItem(item,this.Quantity))
  }

  changeImg(img:string){
    this.imgActive=img
  }

}
