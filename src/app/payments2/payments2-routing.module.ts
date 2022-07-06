import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Payments2Component } from './payments2.component';

const routes: Routes = [
  {
    path:'',
    component:Payments2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Payments2RoutingModule { }
