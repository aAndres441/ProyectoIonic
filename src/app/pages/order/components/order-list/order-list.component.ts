import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Order } from '../../model/order.model';
import { IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  @Input() orders = new Array<Order>();
  @Output() showComponent = new EventEmitter<any>();
  @Input() saleId : number;
  @Output() newOrder = new EventEmitter<any>();
  orderSelected : number = 0;
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll; 

  constructor(  ) {  }

  ngOnInit() {
   if(this.saleId){
     
   }
  }
  
  showDetail(p:Order){
    return this.showComponent.emit({"page":"detail","order":p});
  }

  showForm(p:Order){
    if(!p) {
      return this.showComponent.emit({"page":"form","order":null});
    }
    return this.showComponent.emit({"page":"form","order":p});
  }

  setOrder(i:number){
    this.orderSelected = i
  }

  deleteOrder(i:number){
    let p = this.orders[i];
    return this.showComponent.emit({"page":"delete","order":p});
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

      if (this.orders.length > 1) {
        this.infiniteScroll.disabled = true;
        return;
      }
    }, 1000);
  }
}
