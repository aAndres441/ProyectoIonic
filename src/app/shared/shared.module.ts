import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomePage } from './home/home.page';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ErrorPageModule } from './error/error.module';
import { FondoMarronDirective } from './fondo-marron.directive';
import { PipesModule } from './pipes/pipes.module';

const COMPONENTS = [
  HomePage,
  LayoutComponent,
  SidebarComponent,
  FooterComponent,
  HeaderComponent
];

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
  ErrorPageModule,
  PipesModule
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    FondoMarronDirective
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES
  ],
  imports: [
    ...MODULES
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
