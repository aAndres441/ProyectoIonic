import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/container/index';

import { PagesComponent } from './pages.component';
import { SaleComponent } from './sale/container';

import { ProductFormComponent} from './product/components/product-form/product-form.component';
import { ProductListComponent} from './product/components/product-list/product-list.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'products',
      component: ProductComponent
    } ,
    {
      path: 'sale',
      component: SaleComponent
    } ,
    {
      path: 'formu',
      component: ProductFormComponent
    },
    {
      path: 'lst',
      component: ProductListComponent
    }
  ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }