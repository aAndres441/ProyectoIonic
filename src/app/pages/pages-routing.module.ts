import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/container/product/product.component';

import { PagesComponent } from './pages.component';

  
  const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'products',
        component: ProductComponent
      }
    ]}
  ];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }