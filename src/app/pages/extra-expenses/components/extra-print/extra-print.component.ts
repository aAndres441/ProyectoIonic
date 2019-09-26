import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import { IonInfiniteScroll } from '@ionic/angular';
import { ExtraExpense } from '../../model/extra-expense.model';

@Component({
  selector: 'app-extra-print',
  templateUrl: './extra-print.component.html',
  styleUrls: ['./extra-print.component.scss'],
})
export class ExtraPrintComponent implements OnInit {
  @Input() extraExpenses = new Array<ExtraExpense>();
  @Output() showComponent = new EventEmitter<any>();
  @ViewChild('reporteDiv', { static: true }) reporteDiv: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  showList() {
    this.showComponent.emit({ "page": "list" });
  }

  DownloadtoPDF() {s
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(this.reporteDiv.nativeElement, () => {
      pdf.save( 'GastosExtras.pdf');
    });
  }
  

}
