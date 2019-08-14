import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import {
  ProductListComponent,
  ProductFormComponent,
  ProductDetailComponent
} from './components/index';

import { ProductComponent } from './container/index';

const COMPONENTS = [
  ProductFormComponent,
  ProductListComponent,
  ProductDetailComponent
];

const CONTAINER = [
  ProductComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...CONTAINER
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class ProductModule { }
