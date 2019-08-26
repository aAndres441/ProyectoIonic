import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Product } from '../../model/product.model';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  @Input() products: Array<Product>;
  @Output() showComponent = new EventEmitter<any>();

  // tslint:disable-next-line: max-line-length
  //@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll; //para usar el componente

  data1: boolean;
  data2: any[] = Array(20);
  title = 'List';
  productSelected = 0;

  constructor() { }

  ngOnInit() {
  }

  showDetail(p: Product) {
    return this.showComponent.emit({ page: 'detail', product: p });
  }

  showForm(p: Product) {
    if (!p) { p = new Product(); }
    return this.showComponent.emit({ page: 'form', product: p });
  }

  edit(p: Product) {
    return this.showComponent.emit({ page: 'form', product: p });
  }

  deleteProduct(i: number) {
    const p = this.products[i];
    return this.showComponent.emit({ ' page': 'delete', ' product': p });
  }

  setProduct(i: number) {
    this.productSelected = i;
  }

  addNew() {
    return this.showComponent.emit({ page: 'form', product: null });
  }


  buscarAlgo(event) {
    const texto = event.target.value;
    console.log(texto);
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Carga siguientes...');      

      if (this.products.length > 1000) {
        /*  */
        //this.infiniteScroll.disabled = true;
        return;
      }
    }, 1000);
  }

  toggleInfiniteScroll() {
   // this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  doRefresh(event) {
    console.log('Begin async operation', event);

    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 1000);
  }

}
