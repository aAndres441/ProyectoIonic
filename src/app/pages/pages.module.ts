<<<<<<< HEAD
<<<<<<< HEAD
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
=======
=======
import { HoursEmployeeModule } from './hours-employee/hours-employee.module';
import { PersonModule } from './person/person.module';
import { AssignCharterModule } from './assign-charter/assign-charter.module';
import { CharterModule } from './charter/charter.module';
>>>>>>> 36069182a0048f3161fe53f2db4131963599f990
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
>>>>>>> d9b60315e85dab1992c40a3a4e78fe442fbe3c0e
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';
<<<<<<< HEAD
import { ProductModule } from './product/product.module';
import { SaleModule } from './sale/sale.module';
import { PurchaseModule } from './purchase/purchase.module';
import { PersonModule } from './person/person.module';

import { SaleService } from '../services/sale.service';
import { PurchaseService } from '../services/purchase.service';
import { ProductService } from '../services/product.service';
import { PersonService } from '../services/person.service';


const MODULES = [
  ProductModule,
  SaleModule,
  PurchaseModule,
  PersonModule,
=======
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { SaleModule } from './sale/sale.module';
import { ExtraExpensesModule } from './extra-expenses/extra-expenses.module';

const MODULES = [
  SharedModule,
  ProductModule,
  OrderModule,
  SaleModule,
<<<<<<< HEAD
>>>>>>> d9b60315e85dab1992c40a3a4e78fe442fbe3c0e
  SharedModule
];
=======
  CharterModule,
  AssignCharterModule,
  ExtraExpensesModule,
  PersonModule,
  HoursEmployeeModule
]
>>>>>>> 36069182a0048f3161fe53f2db4131963599f990

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
    SaleService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class PagesModule { }
