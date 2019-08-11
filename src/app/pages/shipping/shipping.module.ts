import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  ShippingDetailComponent,
  ShippingFormComponent,
  ShippingListComponent
} from './components/index';

import { ShippingComponent } from './container/index';

const CONTAINER = [
  ShippingDetailComponent,
  ShippingFormComponent,
  ShippingListComponent
]

const COMPONENTS = [
  ShippingComponent
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

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ShippingModule { }
