import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/container/index';
import { OrderComponent } from './order/container/index';
import { SaleComponent } from './sale/container/index';
import { PersonComponent } from './person/container/index';
import { EmpHoursComponent } from './employee-hours/container/index';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'products',
      component: ProductComponent
    },
    {
      path: 'orders',
      component: OrderComponent
    },
    {
      path: 'sales',
      component: SaleComponent
    },
    {
      path: 'persons',
      component: PersonComponent
    },
    {
      path: 'empHours',
      component: EmpHoursComponent
    }
    /* ,
    {
      path: 'error',
      component: ErrorPage
    } */
  ]
}
/* 
  { path: 'employee-hours', loadChildren: './components/employee-hours/employee-hours.module#EmployeeHoursPageModule' },
  { path: 'employee-hours2', loadChildren: './employee-hours2/employee-hours2.module#EmployeeHours2PageModule' } */
/*  import { EmpHoursComponent } from './employee-hours/container/index';
 */
    /* ,
    {
      path: 'EmployeeHoursComponent',
      component: EmpHoursComponent
    }  */ 

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }