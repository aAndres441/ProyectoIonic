import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
<<<<<<< HEAD
import { SaleComponent } from './sale/container';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'products',
      component: ProductComponent
    }/* ,
    {
      path: 'sale',
      component: SaleComponent
    } */
  ]
}
];
=======
import { ProductComponent } from './product/container/index';
import { OrderComponent } from './order/container/index';
import { SaleComponent } from './sale/container/index';

  
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
      }
    ]}
  ];
>>>>>>> d9b60315e85dab1992c40a3a4e78fe442fbe3c0e

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }