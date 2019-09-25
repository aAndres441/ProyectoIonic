import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AssignCharterFormComponent } from './components/index';
import { AssignCharterComponent } from './container/index';

const COMPONENTS = [
  AssignCharterFormComponent
]
const CONTAINER = [
  AssignCharterComponent
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
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AssignCharterModule { }
