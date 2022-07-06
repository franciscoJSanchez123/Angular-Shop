import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliderjs',
  templateUrl: './sliderjs.component.html',
  styleUrls: ['./sliderjs.component.css']
})
export class SliderjsComponent implements OnInit {

  imgview: number=0;
  imgquant:number=4;
  band:boolean=false;
  band2:boolean=false;
  n:number=0;
  time:any;

  constructor() { }

  ngOnInit(): void {
    this.change();
  }

  change (){

    
    if (this.band==false && this.band2==false) {
      this.imgview+=1;
      if (this.imgview>this.imgquant){this.imgview=1};

    }else if (this.band==true || this.band2==true ) {

      this.band=false;
      this.band2=false;
      if (this.imgview<1){this.imgview=4}
      if (this.imgview>this.imgquant){this.imgview=1}

    }
/*
  this.time =setTimeout( ()=> {this.change()},4000);
*/
  
}


  selection(n:number){

    this.imgview=n;
    this.band=true;
    clearTimeout(this.time);
    this.change();


  }

  NextPrev (n:number){
    this.imgview+=n;
    this.band2=true;
    clearTimeout(this.time);
    this.change();

  }

}
