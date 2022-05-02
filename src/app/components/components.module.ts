import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  exports:[
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
