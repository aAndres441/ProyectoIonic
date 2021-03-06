import { HoursEmployeeModule } from './hours-employee/hours-employee.module';
import { PersonModule } from './person/person.module';
import { AssignCharterModule } from './assign-charter/assign-charter.module';
import { CharterModule } from './charter/charter.module';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
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
  CharterModule,
  AssignCharterModule,
  ExtraExpensesModule,
  PersonModule,
  HoursEmployeeModule
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
    ...MODULES
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class PagesModule { }
