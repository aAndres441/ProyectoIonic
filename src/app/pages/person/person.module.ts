<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { NgModule } from '@angular/core';
=======
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
>>>>>>> 36069182a0048f3161fe53f2db4131963599f990
import { CommonModule } from '@angular/common';
import { PersonFormComponent, PersonListComponent ,PersonDetailComponent} from './components/index';
import { PersonComponent } from './container/index';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [PersonFormComponent,PersonListComponent,PersonDetailComponent]
const CONTAINER = [PersonComponent]

>>>>>>> d9b60315e85dab1992c40a3a4e78fe442fbe3c0e

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...CONTAINER
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    FormsModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

=======
    IonicModule,
    FormsModule,
    ReactiveFormsModule
<<<<<<< HEAD
  ]
>>>>>>> d9b60315e85dab1992c40a3a4e78fe442fbe3c0e
=======
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
>>>>>>> 36069182a0048f3161fe53f2db4131963599f990
})
export class PersonModule { }
