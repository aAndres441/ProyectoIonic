import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
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
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll; // para usar el componente
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
        description:null,
        totalAmount:null,
        tmstmp:null
      }
    }
    return this.showComponent.emit({"page":"form","sale":p});
  }

  setSale(i:number){
    this.saleSelected = i
  }

  deleteSale(i:number){
    let p = this.sales[i];
    return this.showComponent.emit({"page":"delete","sale":p});
  }
  DownloadtoPDF() {
    return this.showComponent.emit({ "page": "print" });    
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
   
      if (this.sales.length > 1) {
        this.infiniteScroll.disabled = true;
        return;
      }
    }, 1000);
  }
}
