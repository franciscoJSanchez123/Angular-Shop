import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/body/home/home.component';


const routes: Routes = [
{path:'', component:HomeComponent},  
{path:'item-list', loadChildren: () => import('./item/item-list/item-list.module').then(m => m.ItemListModule)},
{path:'itemDetail/:_id', loadChildren: ()=> import('./item/item-detail/item-detail.module').then(m => m.ItemDetailModule)},
{path:'cart', loadChildren: () =>import('./cart/cart.module').then(m=>m.CartModule)},
{path:'signup', loadChildren: () =>import('./signup/signup.module').then(m=>m.SignupModule)},
{path:'signin', loadChildren: () =>import('./signin/signin.module').then(m=>m.SigninModule)},
{path:'chat', loadChildren: () =>import('./users/chat/chat.module').then(m=>m.ChatModule)},
{path:'orders', loadChildren: () =>import('./users/orders/orders.module').then(m=>m.OrdersModule)},
{path:'addItem', loadChildren: () =>import('./admin/add-item/add-item.module').then(m=>m.AddItemModule)},
{path:'payments', loadChildren: () =>import('./payments/payments.module').then(m=>m.PaymentsModule)},
{path:'payments2', loadChildren: ()=>import('./payments2/payments2.module').then(m=>m.Payments2Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
