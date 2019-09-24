import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products = new Array<Product>();
  @Output() showComponent = new EventEmitter<any>();
  productSelected : number = 0;
  constructor() {  }

  ngOnInit() {
   
  }
  
  showDetail(p:Product){
    return this.showComponent.emit({"page":"detail","product":p});
  }

  showForm(p:Product){
    if(!p) {
      p = {
        id:null,
        name:null,
        description:null,
        tmstmp:null
      }
    }
    return this.showComponent.emit({"page":"form","product":p});
  }

  setProduct(i:number){
    this.productSelected = i
  }

  deleteProduct(i:number){
    let p = this.products[i];
    return this.showComponent.emit({"page":"delete","product":p});
  }
}
