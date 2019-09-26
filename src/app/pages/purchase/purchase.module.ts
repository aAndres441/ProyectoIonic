import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PurchaseService } from 'src/app/services/purchase.service';
import { OrderModule } from '../order/order.module';
import {PurchaseDetailComponent,PurchaseFormComponent,PurchaseListComponent} from './components/index'
import {PurchaseComponent} from './container/index'

const CONTAINER = [
  PurchaseDetailComponent,PurchaseFormComponent,PurchaseListComponent
]
const COMPONENTS = [
  PurchaseComponent
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
    PurchaseService
  ]
})
export class PurchaseModule { } //ngDefaultControl
