import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemDetailRoutingModule } from './item-detail-routing.module';
import { ItemDetailComponent } from './item-detail.component';

import { ItemService } from 'src/app/services/item-service/item.service';


import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    ItemDetailComponent
  ],
  imports: [
    CommonModule,
    ItemDetailRoutingModule,
    FormsModule
  ],
  providers:[ItemService]
})
export class ItemDetailModule { }
