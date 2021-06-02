import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostingListComponent } from './posting-list/posting-list.component';
import { PostingDetailsComponent } from './posting-details/posting-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {PostingListService} from "./posting-list/service/posting-list.service";
import {PostingDetailsService} from "./posting-details/service/posting-details.service";
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostingListComponent,
    PostingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [PostingListService, PostingDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
