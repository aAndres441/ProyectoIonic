import { PersonComponent } from './person/container/index';
import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/container/index';
import { SaleComponent } from './sale/container/index';
import { CharterComponent } from './charter/container/index';
import { ExtraExpensesComponent } from './extra-expenses/container/index';
import { HoursEmployeeComponent } from './hours-employee/container/index';
import { PurchaseComponent } from './purchase/container/index';


  const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'products',
        component: ProductComponent
      },
      {
        path: 'sales',
        component: SaleComponent
      },
      {
        path: 'purchases',
        component: PurchaseComponent
      },
      {
        path: 'charters',
        component: CharterComponent
      },
      {
        path: 'extra-expenses',
        component: ExtraExpensesComponent
      },
      {
        path: 'persons',
        component: PersonComponent
      },
      {
        path: 'hours-employee',
        component: HoursEmployeeComponent
      }
    ]}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }