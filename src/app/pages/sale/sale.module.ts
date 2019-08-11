import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SaleDetailComponent,SaleFormComponent,SaleListComponent} from './components/index'
import {SaleComponent} from './container/index'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SaleModule { }
