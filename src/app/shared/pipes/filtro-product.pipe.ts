import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/pages/product/model/product.model';

@Pipe({
  name: 'filtroProduct'
})
export class FiltroProductPipe implements PipeTransform {

  transform(products: Product[], dato: string): Product[] {

    if (!products) { return []; }

    if (dato.length === 0 ) { return products; }

    dato = dato.toLocaleLowerCase();

    return products.filter( (unProd) => {
      return unProd.name.toLocaleLowerCase().includes(dato);
    });
  }
/* || unUsu.description.
      toLocaleLowerCase().includes(dato);    */
}
