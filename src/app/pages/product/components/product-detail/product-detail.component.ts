import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  @Output() showComponent = new EventEmitter<any>();
  @Input() detailProduct : Product;
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = this.detailProduct.name;    
  }

  showPage(){
    return this.showComponent.emit({"page":"list"});
  }
  showList(){
    this.showComponent.emit({"page":"list"});
  }

}
