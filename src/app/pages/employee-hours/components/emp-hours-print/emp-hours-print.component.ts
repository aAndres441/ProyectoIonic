import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Person } from '../../../person/model/person.model';
import * as jsPDF from 'jspdf';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-emp-hours-print',
  templateUrl: './emp-hours-print.component.html',
  styleUrls: ['./emp-hours-print.component.scss'],
})
export class EmpHoursPrintComponent implements OnInit {
  @Input() persons: Person[];
  @Output() showComponent = new EventEmitter<any>();
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll; // para usar el componente
 
  public title: string;

  @ViewChild('reporteDiv', { static: true }) reporteDiv: ElementRef;

  constructor() { 
  }

  ngOnInit() {
    this.title = 'Download';
    
  }

  showList() {
    this.showComponent.emit({ "page": "list" });
  }

  DownloadtoPDF() {
    /* alert(this.reporteDiv.nativeElement.innerHTML); */
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(this.reporteDiv.nativeElement, () => {
      pdf.save( 'Horarios.pdf');
    });
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Carga siguientes...');

      if (this.persons.length > 1) {
        this.infiniteScroll.disabled = true;
        return;
      }
    }, 1000);
  }

}
