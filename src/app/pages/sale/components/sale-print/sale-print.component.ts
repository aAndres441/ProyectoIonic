import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Sale } from '../../model/sale.model';

import * as jsPDF from 'jspdf';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-sale-print',
  templateUrl: './sale-print.component.html',
  styleUrls: ['./sale-print.component.scss'],
})
export class SalePrintComponent implements OnInit {

  @Input() sales: Sale[];
  @Output() showComponent = new EventEmitter<any>();
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll; // para usar el componente

  public title: string;

  @ViewChild('reporteDiv', { static: true }) reporteDiv: ElementRef;

  constructor() { }

  ngOnInit() {
    
     this.title = 'Download';
     console.log("llegan" + this.sales.length +"con"+ this.sales);
  }

  showList() {
    this.showComponent.emit({ page: 'list' });
  }

  DownloadtoPDF() {
    /* alert(this.reporteDiv.nativeElement.innerHTML); */
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(this.reporteDiv.nativeElement, () => {
      pdf.save( 'Venta.pdf');
    });
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
