import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TexterComponent } from './texter/texter.component';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


@NgModule({
  declarations: [
    KeyboardComponent,
    TexterComponent,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ColorPickerModule,
    NgxSliderModule
  ],
  exports: [
    KeyboardComponent,
    TexterComponent
  ]
})
export class KeyboardModule { }
