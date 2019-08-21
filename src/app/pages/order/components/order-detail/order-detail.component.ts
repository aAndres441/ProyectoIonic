import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../../model/order.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  @Output() showComponent = new EventEmitter<any>();
  @Input() detailOrder : Order = new Order();

  constructor() { }

  ngOnInit() {
    
  }

  showPage(){
    return this.showComponent.emit({"page":"list"});
  }

}
