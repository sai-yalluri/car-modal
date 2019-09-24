import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{NgbdModalBasic} from './Task 8/modal-basic';
import{NgbdModalBasicModule} from './Task 8/modal-basic-module';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbdModalBasicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
