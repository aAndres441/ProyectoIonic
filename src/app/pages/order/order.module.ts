import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {
  OrderDetailComponent,
  OrderFormComponent,
  OrderListComponent,
  OrderPrintComponent
} from './components/index';

import { OrderComponent } from './container/index';

const COMPONENTS = [
  OrderDetailComponent,
  OrderFormComponent,
  OrderListComponent,
  OrderPrintComponent
];

const CONTAINER = [OrderComponent];

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
  exports: [
    ...COMPONENTS,
    ...CONTAINER
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class OrderModule { }
