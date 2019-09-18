import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Order } from '../../model/order.model';

import * as jsPDF from 'jspdf';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-order-print',
  templateUrl: './order-print.component.html',
  styleUrls: ['./order-print.component.scss'],
})
export class OrderPrintComponent implements OnInit {

  @Input() orders: Order[];
  /* @Input() orders = new Array<Order>(); */
  @Output() showComponent = new EventEmitter<any>();
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll; // para usar el componente
 
  public title: string;

  @ViewChild('reporteDiv', { static: true }) reporteDiv: ElementRef;

  constructor() { 
  }

  ngOnInit() {
    this.title = 'Download';
    
    console.log("llegan" + this.orders.length +"con"+ this.orders);
  }

  showList() {
    this.showComponent.emit({ "page": "list" });
  }

  DownloadtoPDF() {
    /* alert(this.reporteDiv.nativeElement.innerHTML); */
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(this.reporteDiv.nativeElement, () => {
      pdf.save( 'Orden.pdf');
    });
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
