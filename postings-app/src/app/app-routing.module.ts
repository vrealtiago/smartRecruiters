import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostingListComponent} from "./posting-list/posting-list.component";
import {PostingDetailsComponent} from "./posting-details/posting-details.component";

const routes: Routes = [
  {path:'postings-list', component: PostingListComponent, data: { title:'Postings List' } },
  {path:'posting-details/:id', component: PostingDetailsComponent, data: { title:'Postings Details' } },
  {path:'', redirectTo: 'postings-list', pathMatch: 'full'},
  {path: '**', redirectTo: 'postings-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
