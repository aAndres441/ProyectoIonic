import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../pages/product/model/product.model';

@Pipe({
  name: 'mySearch'
})
export class MySearchPipe implements PipeTransform {

  transform(products: Product[], textoABuscar: string): Product[] {
    if (textoABuscar.length === 0) {
      return products;
    }
    textoABuscar = textoABuscar.toLocaleLowerCase();

    return products.filter( (prod) => {
      return prod.name.includes(textoABuscar); // regresa arreglos los que coinciden con el textp
    });
  }

}
