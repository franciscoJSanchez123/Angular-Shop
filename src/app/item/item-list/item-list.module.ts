import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemListRoutingModule } from './item-list-routing.module';
import { ItemListComponent } from './item-list.component';
import { ItemService } from 'src/app/services/item-service/item.service';

import { NgxPaginationModule } from 'ngx-pagination';









@NgModule({
  declarations: [
    ItemListComponent
  ],
  imports: [
    CommonModule,
    ItemListRoutingModule,
    NgxPaginationModule
  ],
  providers:[ItemService]
})
export class ItemListModule { }
