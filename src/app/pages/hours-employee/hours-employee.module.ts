import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HoursEmployeeService } from 'src/app/services/hours-employee.service';
import {HoursEmployeeDetailComponent,HoursEmployeeFormComponent,HoursEmployeeListComponent} from './components/index'
import {HoursEmployeeComponent} from './container/index'

const CONTAINER = [
  HoursEmployeeDetailComponent,HoursEmployeeFormComponent,HoursEmployeeListComponent
]
const COMPONENTS = [
  HoursEmployeeComponent
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
    IonicModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    HoursEmployeeService
  ]
})
export class HoursEmployeeModule { } 
