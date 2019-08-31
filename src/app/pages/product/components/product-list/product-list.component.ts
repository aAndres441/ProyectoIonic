import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Product } from '../../model/product.model';
import { IonInfiniteScroll } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  
  @Input() products : Array<Product>;
  @Output() showComponent = new EventEmitter<any>();
  @ViewChild( IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll; // para usar el componente
  productSelected : number = 0;
  title = 'Products';

  constructor() {  }

  ngOnInit() {
   
  }
  
  showDetail(p:Product){
    return this.showComponent.emit({"page":"detail","product":p});
  }

  showForm(p:Product){
    if(!p) {
      p = new Product();
    }
    return this.showComponent.emit({"page":"form","product":p});
  }

  setProduct(i:number){
    this.productSelected = i
  }

  deleteProduct(i:number){ 
    let p = this.products[i];
    /*return this.showComponent.emit({"page":"delete","product":p}); */
    console.log('DELETE PROD ' + p.name);
  }
  /* refresh */
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

      if (this.products.length > 5) {
        this.infiniteScroll.disabled = true;
        return;
      }
    }, 1000);
  }
}
