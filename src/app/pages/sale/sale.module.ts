import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SaleService } from 'src/app/services/sale.service';
import { OrderModule } from '../order/order.module';
import {SaleDetailComponent,SaleFormComponent,SaleListComponent} from './components/index'
import {SaleComponent} from './container/index'

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
  ]
})
export class SaleModule { } //ngDefaultControl
