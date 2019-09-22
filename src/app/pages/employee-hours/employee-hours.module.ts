import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import {
  EmpHoursDetailComponent,
 EmpHoursFormComponent,
 EmpHoursListComponent,
 EmpHoursPrintComponent
 } from './components/index';

import { EmpHoursComponent } from './container/index';

const COMPONENTS = [
  EmpHoursDetailComponent,
  EmpHoursFormComponent,
  EmpHoursListComponent,
  EmpHoursPrintComponent
];

const CONTAINER = [EmpHoursComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...CONTAINER
  ],

  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})

export class EmployeeHoursModule { }
