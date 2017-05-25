import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdButtonModule, MdCheckboxModule} from "@angular/material";
import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  exports: [MdButtonModule, MdCheckboxModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
