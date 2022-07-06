import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item-service/item.service';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css']
})
export class NavSearchComponent implements OnInit {
  isActive:boolean=false;
  items:Item[]=[]
  query:string=""
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.itemService.findAll('All').subscribe(data=>{
      this.items=data;
    })
  }

  change(){
    if (this.isActive===false){
      this.isActive=true
    }else{
      this.isActive=false
    }
  }

}
