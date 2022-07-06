import { Component, OnInit } from '@angular/core';

import {Item} from './../../models/item';
import {ItemService} from './../../services/item-service/item.service'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item:Item={
    
    name:"",
    description:"",
    img:"",
    isActive:true,
    price:0,
    imgsUrls:[]

  }

  update:boolean=false
  add:boolean=true
  delete:boolean=false
  id:string=""

  constructor(
    private itemService:ItemService
  ) { }

  ngOnInit(): void {
  }

  addItem(){
    console.log("aqui addItem de addItem component")
    console.log(this.item)
    console.log("aqui addItem de addItem component")
    this.itemService.add(this.item).subscribe()
  }

  findItem(){
    this.itemService.findId(this.id).subscribe(data=>{
      this.item=data
    })
  }

  updateItem(){
    this.itemService.update(this.id,this.item).subscribe()
  }

  deleteItem(){
    this.itemService.delete(this.id).subscribe(()=>{
      this.deleteInput()
    })
  }

  deleteInput(){

    this.item={
    name:"",
    description:"",
    img:"",
    isActive:true,
    price:0,
    imgsUrls:[]
    }
  }

  

}
