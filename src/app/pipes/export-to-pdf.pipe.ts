import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exportToPdf'
})
export class ExportToPdfPipe implements PipeTransform {

  transform(products: any[], textoOpcional?: string): any[] {
    return null;
  }

}
