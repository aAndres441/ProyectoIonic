import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Sale } from '../../model/sale.model';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.scss'],
})
export class SaleDetailComponent implements OnInit {
  @Output() showComponent = new EventEmitter<any>();
  @Input() detailSale: Sale = null; /*Sale =  new Person(); */
  title: string;

  constructor() { }

  ngOnInit() {
    console.log(this.detailSale);
    this.title = this.detailSale.clientName;
    
  }

  showPage(){
    return this.showComponent.emit({"page":"list"});
  }
  showList(){
    this.showComponent.emit({"page":"list"});
  }

 

}
