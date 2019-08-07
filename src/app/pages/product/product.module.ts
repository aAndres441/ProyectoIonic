import { ProductListComponent,ProductFormComponent,ProductDetailComponent } from './components/index';
import { ProductComponent } from './container/index';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const COMPONENTS = [
  ProductFormComponent,
  ProductListComponent,
  ProductDetailComponent
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
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ProductModule { }
