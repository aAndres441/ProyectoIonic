import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
   PersonFormComponent,
  PersonListComponent,
  PersonDetailComponent
  } from './components/index';
import { PersonComponent } from './container/index';

const COMPONENTS = [PersonFormComponent,PersonListComponent,PersonDetailComponent]
const CONTAINER = [PersonComponent]


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
  ]
})
export class PersonModule { }
