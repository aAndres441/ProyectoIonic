import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/container/index';
import { OrderComponent } from './order/container/index';
import { SaleComponent } from './sale/container/index';
import { PersonComponent } from './person/container/index';


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
    }/* ,
    {
      path: 'error',
      component: ErrorPage
    } */
  ]
},


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }