import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

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
    FormsModule,
    IonicModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PersonModule { }
