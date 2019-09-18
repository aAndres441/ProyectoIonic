import { HomePage } from './shared/home/home.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorPage } from './shared/error/error.page';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'layout', loadChildren: '../app/pages/pages.module#PagesModule'},
  { path: '**', redirectTo: 'error' },
  { path: 'error', component: ErrorPage  } 

// './app/shared/error/error.module#ErrorPageModule'
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) //  { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
