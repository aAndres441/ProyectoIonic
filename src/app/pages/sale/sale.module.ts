import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderModule } from '../order/order.module';

import { SaleService } from 'src/app/services/sale.service';

import {
  SaleDetailComponent,
  SaleFormComponent,
  SaleListComponent,
  SalePrintComponent
} from './components/index';

import {SaleComponent} from './container/index';

const CONTAINER = [
  SaleDetailComponent,
  SaleFormComponent,
  SaleListComponent,
  SalePrintComponent
];

const COMPONENTS = [
  SaleComponent
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
    IonicModule,
    OrderModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    SaleService
    /* { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => MyControlComponent),
    } */
  ]
})
export class SaleModule { } //ngDefaultControl
