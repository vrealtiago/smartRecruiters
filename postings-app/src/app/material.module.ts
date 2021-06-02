import { NgModule } from '@angular/core';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  exports:[
    MatAutocompleteModule,MatButtonModule,MatIconModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule, MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
