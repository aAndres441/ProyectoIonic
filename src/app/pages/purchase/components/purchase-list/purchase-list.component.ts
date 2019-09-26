import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Purchase } from '../../model/purchase.model';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss'],
})
export class PurchaseListComponent implements OnInit {
  @Input() purchases : Array<Purchase>;
  @Output() showComponent = new EventEmitter<any>();
  purchaseSelected : number = 0;
  constructor() {  }

  ngOnInit() {
   
  }
  
  showDetail(p:Purchase){
    return this.showComponent.emit({"page":"detail","purchase":p});
  }

  showForm(p:Purchase){
    if(!p) {
      p = {
        id:null,
        clientId:null,
        clientName:null,
        description:null,
        totalAmount:null,
        tmstmp:null
      }
    }
    return this.showComponent.emit({"page":"form","purchase":p});
  }

  setPurchase(i:number){
    console.log(i)
    this.purchaseSelected = i
  }

  deletePurchase(i:number){
    let p = this.purchases[i];
    return this.showComponent.emit({"page":"delete","purchase":p});
  }

}
