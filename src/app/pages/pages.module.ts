import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';
import { ProductModule } from './product/product.module';
import { SaleModule } from './sale/sale.module';
import { PurchaseModule } from './purchase/purchase.module';
import { PersonModule } from './person/person.module';
import { ShippingModule } from './shipping/shipping.module';
import { OrderModule } from './order/order.module';

import { SaleService } from '../services/sale.service';
import { PurchaseService } from '../services/purchase.service';
import { ProductService } from '../services/product.service';
import { PersonService } from '../services/person.service';
import { OrderService } from '../services/order.service';


const MODULES = [
  ProductModule,
  SaleModule,
  PurchaseModule,
  PersonModule,
  SharedModule,
  OrderModule,
  ShippingModule
];

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ...MODULES
  ],
  providers: [
    PersonService,
    ProductService,
    PurchaseService,
    SaleService,
    OrderService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class PagesModule { }
