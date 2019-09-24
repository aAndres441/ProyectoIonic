import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/container/index';
import { OrderComponent } from './order/container/index';
import { SaleComponent } from './sale/container/index';
import { CharterComponent } from './charter/container/index';
import { ExtraExpensesComponent } from './extra-expenses/container/index';

  
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
        path: 'charters',
        component: CharterComponent
      },
      {
        path: 'extra-expenses',
        component: ExtraExpensesComponent
      }
    ]}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }