import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
   ProductListComponent,
   ProductFormComponent,
   ProductDetailComponent,
   PrintComponent
   } from './components/index';
import { ProductComponent } from './container/index';

const COMPONENTS = [
  ProductFormComponent,
  ProductListComponent,
  ProductDetailComponent,
  PrintComponent
]
const CONTAINER = [
  ProductComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...CONTAINER
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ProductModule { }
