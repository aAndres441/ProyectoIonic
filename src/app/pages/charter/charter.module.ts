import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CharterFormComponent } from './components/index'
import { CharterComponent } from './container/index'
import { CharterService } from 'src/app/services/charter.service';

const COMPONENTS = [
  CharterFormComponent
]
const CONTAINER = [
  CharterComponent
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
  exports: [
    CharterFormComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    CharterService
  ]
})
export class CharterModule { }
