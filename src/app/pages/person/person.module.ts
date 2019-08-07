import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  PersonAditionalDataComponent,
  PersonFormComponent,
  PersonDetailComponent,
  PersonListComponent
} from './components/index';
import { PersonComponent } from './container/index';

const COMPONENTS = [
  PersonAditionalDataComponent,
  PersonFormComponent,
  PersonDetailComponent,
  PersonListComponent
];

const CONTAINER = [
  PersonComponent
];

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
export class PersonModule { }
