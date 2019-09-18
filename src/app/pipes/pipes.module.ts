import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportToPdfPipe } from './export-to-pdf.pipe';
import { MySearchPipe } from './my-search.pipe';



@NgModule({
  declarations: [
    ExportToPdfPipe,
    MySearchPipe
   ],
  imports: [
    CommonModule
  ],
  exports: [
    ExportToPdfPipe,
    MySearchPipe
  ],
  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PipesModule { }
