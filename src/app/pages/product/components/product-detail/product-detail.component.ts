import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  @Output () showComponent =  new EventEmitter <any> ();
  @Input () detailProduct: Product  =  new Product ();

  numero: number;  /* Math.floor(Math.random() * */
 title = 'Details';
 
  constructor() { }

  ngOnInit() {}

  showPage() {
    return  this.showComponent. emit ({ page : ' list ' });
  }


  showForm(p: Product) {
    if (!p) { p = new Product(); }
    return this.showComponent.emit({ page: 'form', product: p });
  } 

  showDetail(p: Product) {
    return this.showComponent.emit({ page: 'detail', product: p });
  }

  showForm(p: Product) {
    if (!p) { p = new Product(); }
    return this.showComponent.emit({ page: 'form', product: p });
  }
  edit(p:Product){
    return this.showComponent.emit({"page":"form","product":p});
  }
 
  delete(i:number){
    let p = this.products[i];
    return this.showComponent.emit({"page":"form","product":p});
  }

}
