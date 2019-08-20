import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

import {SaleDetailComponent,SaleFormComponent,SaleListComponent} from './components/index'
import {SaleComponent} from './container/index'
import { SaleService } from 'src/app/services/sale.service';
import { IonicModule } from '@ionic/angular';
import { OrderModule } from '../order/order.module';


const CONTAINER = [
  SaleDetailComponent,SaleFormComponent,SaleListComponent
]
const COMPONENTS = [
  SaleComponent
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
