import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/container/product/product.component';

import { PagesComponent } from './pages.component';
import { SaleComponent } from './sale/container';

<<<<<<< HEAD

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
  
  const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'products',
        component: ProductComponent,
        data: { title : 'Productos' }
      }
    ]}
  ];
>>>>>>> 12c07bd3eb515725bf329cfeefec6432ee22fc97

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }