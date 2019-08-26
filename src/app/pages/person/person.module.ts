import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonFormComponent, PersonListComponent } from './components/index';
import { PersonComponent } from './container/index';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [PersonFormComponent,PersonListComponent]
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
