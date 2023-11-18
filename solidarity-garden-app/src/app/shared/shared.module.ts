import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoFieldComponent } from './info-field/info-field.component';
import { NewsCardComponent } from './news-card/news-card.component';



@NgModule({
  declarations: [
    InfoFieldComponent,
    NewsCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InfoFieldComponent,
    NewsCardComponent
  ]
})
export class SharedModule { }
