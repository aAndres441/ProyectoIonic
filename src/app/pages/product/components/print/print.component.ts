import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../../model/product.model';
import * as jsPDF from 'jspdf';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss'],
})
export class PrintComponent implements OnInit {

  @Input() products: Product[];
  @Output() showComponent = new EventEmitter<any>();
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll; // para usar el componente
  @Input() titulo: string;
  title: string;

  @ViewChild('reporteDiv', { static: true }) reporteDiv: ElementRef;

  constructor() { }

  ngOnInit() {
    this.title = 'Download';
    console.log("estos son: " +this.products)
  }

  showList() {
    this.showComponent.emit({ "page": "list" });
  }

  DownloadtoPDF() {
    /* alert(this.reporteDiv.nativeElement.innerHTML); */
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(this.reporteDiv.nativeElement, () => {
      pdf.save( 'Productos.pdf');
    });
  }
  loadData(event) {
    setTimeout(() => {
      console.log('Carga siguientes...');

      if (this.products.length > 5) {
        this.infiniteScroll.disabled = true;
        return;
      }
    }, 1000);
  }

}
