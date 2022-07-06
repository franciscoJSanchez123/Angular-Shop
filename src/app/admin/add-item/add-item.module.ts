import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddItemRoutingModule } from './add-item-routing.module';
import { AddItemComponent } from './add-item.component';

import { FormsModule } from '@angular/forms';
import { ItemService } from './../../services/item-service/item.service'


@NgModule({
  declarations: [AddItemComponent],
  imports: [
    CommonModule,
    AddItemRoutingModule,
    FormsModule
  ],
  providers:[ItemService]
})
export class AddItemModule { }
