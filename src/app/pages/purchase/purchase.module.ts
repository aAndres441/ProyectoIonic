import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  PurchaseDetailComponent,
  PurchaseFormComponent,
  PurchaseListComponent
} from './components/index';

import { PurchaseComponent } from './container/index';

const COMPONENTS = [
  PurchaseDetailComponent,
  PurchaseFormComponent,
  PurchaseListComponent
];

const CONTAINER = [
  PurchaseComponent
];

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

export class PurchaseModule { }
