import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TravelService } from 'src/app/services/travel.service';
import { TravelFormComponent, TravelListComponent } from './components/index'
import { TravelComponent } from './container/index'
const COMPONENTS = [
  TravelFormComponent,
  TravelListComponent
]
const CONTAINER = [
  TravelComponent
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
    TravelService
  ]
})
export class TravelModule { }
