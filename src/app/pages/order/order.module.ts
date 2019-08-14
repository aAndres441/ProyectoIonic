import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailComponent, OrderFormComponent, OrderListComponent } from './components/index';
import { OrderComponent } from './container/index';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
const COMPONENTS =[OrderDetailComponent,OrderFormComponent,OrderListComponent]
const CONTAINER = [OrderComponent]


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
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class OrderModule { }
