import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoFieldComponent } from './info-field/info-field.component';



@NgModule({
  declarations: [
    InfoFieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InfoFieldComponent
  ]
})
export class SharedModule { }
