import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../../model/order.model';

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
  

  constructor() {  }

  ngOnInit() {
   
  }
  
  showDetail(p:Order){
    return this.showComponent.emit({"page":"detail","order":p});
  }

  showForm(p:Order){
    if(!p) {
      return this.newOrder.emit();
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
}
