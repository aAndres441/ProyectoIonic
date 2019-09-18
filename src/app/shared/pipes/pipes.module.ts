import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  FiltroProductPipe,
  FiltroPersonasPipe
 } from './index';


@NgModule({
  declarations: [ 
    FiltroProductPipe,
     FiltroPersonasPipe
    ],
  imports: [
    CommonModule
  ],
  exports: [ 
    FiltroProductPipe,
    FiltroPersonasPipe
] // se lo agrego para poder usarlo

})

export class PipesModule { }
