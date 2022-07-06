import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from './../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';

import {HeaderComponent} from './header/header.component';
import {NavMainComponent} from './header/nav-main/nav-main.component';
import {NavAuthComponent} from './header/nav-auth/nav-auth.component';
import {NavCartComponent} from './header/nav-cart/nav-cart.component';
import {NavSearchComponent} from './header/nav-search/nav-search.component';
import {FooterComponent} from './footer/footer.component';

import {AppRoutingModule} from './../app-routing.module';
import { SidebarComponent } from './body/sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';

import {HomeModule} from './../core/body/home/home.module';

import { ItemService } from '../services/item-service/item.service';
import { ItemSearchPipe } from '../pipes/item-search.pipe';















@NgModule({
  declarations: [
    HeaderComponent,
    NavMainComponent,
    NavAuthComponent,
    NavCartComponent,
    NavSearchComponent,
    FooterComponent,
    SidebarComponent,
    BodyComponent,
    ItemSearchPipe
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule,
    HomeModule
  ],

  exports:[CommonModule, HeaderComponent,FooterComponent, BodyComponent],
  providers:[ItemService]

})
export class CoreModule { }
