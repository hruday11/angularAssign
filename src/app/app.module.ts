import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { ButtonsModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';

import { CommonServiceService } from './services/common-service.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [ CommonServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
