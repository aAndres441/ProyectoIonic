import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sale } from '../../model/sale.model';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss'],
})
export class SaleListComponent implements OnInit {
  @Input() sales : Array<Sale>;
  @Output() showComponent = new EventEmitter<any>();
  saleSelected : number = 0;
  constructor() {  }

  ngOnInit() {
   
  }
  
  showDetail(p:Sale){
    return this.showComponent.emit({"page":"detail","sale":p});
  }

  showForm(p:Sale){
    if(!p) {
      p = {
        id:null,
        clientId:null,
        clientName:null,
        charterId:null,
        description:null,
        totalAmount:null,
        tmstmp:null
      }
    }
    return this.showComponent.emit({"page":"form","sale":p});
  }

  setSale(i:number){
    console.log(i)
    this.saleSelected = i
  }

  deleteSale(i:number){
    let p = this.sales[i];
    return this.showComponent.emit({"page":"delete","sale":p});
  }

}
