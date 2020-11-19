import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProvider } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, HttpClientModule
  ],
  providers: [appRoutingProvider, /*servicios*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
