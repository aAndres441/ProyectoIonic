import { RouterModule, Routes, ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductComponent } from './product/container/index';
import { PurchaseComponent } from './purchase/container/index';
import { SaleComponent } from './sale/container/index';
import { ShippingComponent } from './shipping/container/index';
import { PersonComponent } from './person/container/index';

import { PagesComponent } from './pages.component';

import { ProductFormComponent} from './product/components/product-form/product-form.component';
import { ProductListComponent} from './product/components/product-list/product-list.component';
import { ShippingFormComponent } from './shipping/components';




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
    },
    {
      path: 'purchase',
      component: PurchaseComponent
    },
    {
      path: 'shipping',
      component: ShippingComponent
    },
    {
      path: 'person',
      component: PersonComponent
    },
    {
      path: 'shippingForm',
      component: ShippingFormComponent
    }
  ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }