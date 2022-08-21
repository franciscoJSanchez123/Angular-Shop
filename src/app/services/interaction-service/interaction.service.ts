import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  sidebar:boolean=false;
  changeSidebar:EventEmitter<any>=new EventEmitter<any>();
  changeItemSearch:EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  change(option:string){
    switch(option){
      case 'open':
        this.sidebar=true;
        break;
      case 'close':
        this.sidebar=false;
        break;
      case 'change':
        this.sidebar=!this.sidebar
        break;
    }
    this.changeSidebar.emit(this.sidebar);
  }


  

}
