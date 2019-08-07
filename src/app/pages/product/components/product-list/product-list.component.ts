import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products : Array<Product>;
  @Output() showComponent = new EventEmitter<any>();

  constructor() {  }

  ngOnInit() {
   
  }
  unread(item:any){

  }
  showDetail(p:Product){
    return this.showComponent.emit({"page":"detail","product":p});
  }

  showForm(p:Product){
    if(!p) p = new Product();
    return this.showComponent.emit({"page":"form","product":p});
  }
  edit(p:Product){
    
    return this.showComponent.emit({"page":"form","product":p});
  }
}
