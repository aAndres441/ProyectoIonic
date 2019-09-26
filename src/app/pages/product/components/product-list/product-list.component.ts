import { Component, OnInit, Input, Output, EventEmitter,ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { Product } from '../../model/product.model';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products = new Array<Product>();
  @Output() showComponent = new EventEmitter<any>();
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll; 

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
  DownloadtoPDF(){    
    return this.showComponent.emit({ 'page': 'print'});
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

  loadData(event) {
    setTimeout(() => {
      console.log('Carga siguientes...');

      if (this.products.length > 1) {
        this.infiniteScroll.disabled = true;
        return;
      }
    }, 1000);
  }
}
