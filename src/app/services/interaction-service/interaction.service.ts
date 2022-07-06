import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  sidebar:boolean=false;
  changeSidebar:EventEmitter<any>=new EventEmitter<any>();
  changeItemSearch:EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  change(){

  
    this.sidebar=!this.sidebar
    this.changeSidebar.emit(this.sidebar);
    console.log(this.sidebar)
  }


  

}
