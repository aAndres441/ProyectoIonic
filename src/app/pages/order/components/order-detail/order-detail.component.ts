import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Order } from '../../model/order.model';

import * as jsPDF from 'jspdf'; 
import * as html2canvas from 'html2canvas';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  @Output() showComponent = new EventEmitter<any>();
  @Input() detailOrder : Order = null;/* new Order();*/

  @ViewChild('reporteDiv', null) reporteDiv: ElementRef;
  names: string[];

 

title: string = "Ver-OnInit()";

constructor() { 
  
this.names = ['a', 's', 'g'];

}

  ngOnInit() {
    /* this.title = this.detailOrder.name; */
    
  }

  /* report to pdf */
  reporte() {
    let doc = new jsPDF();
    let specialElemenHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    const reporte = this.reporteDiv.nativeElement;
    doc.fromHTML(reporte.innerHTML, 15, 15, {
      width: 190,
      elementHandlers: specialElemenHandlers
    });
    doc.save('test.pdf');
  }

  showPage(){
    return this.showComponent.emit({"page":"list"});
  }
  showList(){
    this.showComponent.emit({"page":"list"});
  }

  repote(){

  }

}


