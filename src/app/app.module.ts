import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ItemComponent } from './item/item.component';
import { TotalComponent } from './total/total.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
