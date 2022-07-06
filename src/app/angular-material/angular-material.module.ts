import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



const materialComponents:any=[MatIconModule,MatInputModule,MatButtonModule]

@NgModule({
  declarations: [
    
  
    
  ],
  imports: [
    CommonModule,materialComponents
  ],
  exports:[materialComponents]
  
})
export class AngularMaterialModule { }
