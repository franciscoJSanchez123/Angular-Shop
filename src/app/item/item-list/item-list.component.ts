import { Component, OnInit } from '@angular/core';

import {Item} from '../../models/item';
import {CartItem} from '../../models/cart-item';

import {ItemService} from '../../services/item-service/item.service';
import {CartService} from '../../services/cart-service/cart.service';
import { InteractionService } from 'src/app/services/interaction-service/interaction.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  item!:Item;
  items:Item[]=[];
  selection:string='All'

  constructor(
    private itemService:ItemService, 
    private cartService:CartService,
    private interactionService:InteractionService
    
    ) { }

  page: number = 1;

  ngOnInit(): void {
    console.log("aqui inicializando item-list")
    this.itemService.findAll(this.selection).subscribe(data=>{
       console.log(data);
        this.items=data;
        console.log(this.items[0]._id)

    })
    this.interactionService.changeItemSearch.subscribe(data=>{
      this.items=data;
    })
  }

  addItem(item:Item){

    this.cartService.addItem(new CartItem(item,1));

  }

  selectOrder(order:string){
    this.selection=order;
    this.itemService.findAll(this.selection).subscribe(data=>{
      this.items=data
    })
  }
}
