import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderjsComponent } from './sliderjs/sliderjs.component';
import { AngularMaterialModule } from './../../../angular-material/angular-material.module'



@NgModule({
  declarations: [
    HomeComponent,
    SliderjsComponent
  ],
  imports: [
    CommonModule, AngularMaterialModule
  ]
})
export class HomeModule { }
