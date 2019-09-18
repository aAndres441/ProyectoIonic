import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { SaleModule } from './sale/sale.module';
import { PersonModule } from './person/person.module';
import { PipesModule } from '../pipes/pipes.module';
const MODULES = [
  ProductModule,
  OrderModule,
  SaleModule,
  SharedModule,
  PersonModule
]
const PIPES = [
  PipesModule
]

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [ 
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ...MODULES,
    ...PIPES
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class PagesModule { }
