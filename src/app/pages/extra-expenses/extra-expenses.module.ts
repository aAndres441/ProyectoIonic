import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExtraExpensesFormComponent,ExtraExpensesListComponent } from './components/index';
import { ExtraExpensesComponent } from './container/index';

const COMPONENTS =[
  ExtraExpensesFormComponent,
  ExtraExpensesListComponent
]
const CONTAINER = [
  ExtraExpensesComponent
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
  exports:[
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ExtraExpensesModule { }
