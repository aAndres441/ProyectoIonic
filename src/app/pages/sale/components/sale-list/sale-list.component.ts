import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Sale } from '../../model/sale.model';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss'],
})
export class SaleListComponent implements OnInit {
  @Input() sales: Array<Sale>;
  @Output() showComponent = new EventEmitter<any>();
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll; // para usar el componente
  saleSelected: number = 0;
  title = 'Sales';

  constructor() {
  }

  ngOnInit() {
  }

  showDetail(s: Sale) {
    return this.showComponent.emit({ "page": "detail", "sale": s });
  }

  showForm(s: Sale) {
    if (!s) {
      s = {
        id: null,
        clientId: null,
        clientName: null,
        description: null,
        totalAmount: null,
        tmstmp: null
      }
    }
    
    return this.showComponent.emit({ "page": "form", "sale": s });
  }

  setSale(i: number) {
    this.saleSelected = i;
  }

  deleteSale(i: number) {
    const s = this.sales[i];
     /* console.log('DELETE PROD ' + s.clientName); */
    return this.showComponent.emit({"page":"delete","sale":s});
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
   
      if (this.sales.length > 5) {
        this.infiniteScroll.disabled = true;
        return;
      }
    }, 1000);
  }
  /* report to page print for pdf */
  DownloadtoPDF() {
    /* alert("estos" + this.sales.length); */
    return this.showComponent.emit({ "page": "print" });
    
  }
}
