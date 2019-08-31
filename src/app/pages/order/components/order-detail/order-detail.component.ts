import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../../model/order.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  @Output() showComponent = new EventEmitter<any>();
  @Input() detailOrder : Order = null;/* new Order();
 */
  title: string = "Ver-OnInit()";

  constructor() { }

  ngOnInit() {
    /* this.title = this.detailOrder.name; */
    
  }

  showPage(){
    return this.showComponent.emit({"page":"list"});
  }
  showList(){
    this.showComponent.emit({"page":"list"});
  }

}


