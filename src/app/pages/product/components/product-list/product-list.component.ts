import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewChild, ViewChildren, ElementRef, Inject, AfterViewInit, Directive, Renderer2 } from '@angular/core';
import { Product } from '../../model/product.model';
import { IonInfiniteScroll } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import * as h2c from 'html2canvas';
import { FiltroProductPipe} from '../../../../shared/pipes/filtro-product.pipe';
import { RouterLink, Router } from '@angular/router';
import { PrintComponent } from '..';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products = new Array<Product>();
  @Output() showComponent = new EventEmitter<any>();
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll; // para usar el componente
  productSelected: number = 0;
  title = 'Products';
  productoBuscado: string = '';
  productsFiler = new Array<Product>();

  @ViewChild('reporteDiv', { static: true }) reporteDiv: ElementRef;
  @ViewChildren(' paragraph2, paragraph3') paragraph;
  /* PADRE */
  /* declaramos: referencia del componente #hijo con el tipo de componente  PrintComponent
  y las variables para input..[(ngModel)]="texto" y 
  <span> {menasjeError}}</span> del texto a mostrar de este mismo html */
 /*  @ViewChild('hijo', { static: true }) componenteHijo: PrintComponent;
  texto: string;
  menasjeError: string; */

  constructor(private router: Router) {
  }
  ngOnInit() {
    this.productsFiler = this.products;
   }

  /* enviarMensaje() {
    if (!this.texto) {
      this.menasjeError = 'Debe escribir texto';
    }
    else {
      this.menasjeError = ''; */
      /* si tiene texto, lo editamos a ese texto en el componenteHijo */
     /*  this.componenteHijo.editarMensaje(this.texto);
    }
  } */

  AfterViewInit() {
    /* this.reporteDiv.nativeElement.innerHTML = "Called @ViewChild In Angular 6";
    console.log(this.reporteDiv.nativeElement); // mayo
    setTimeout(() => this.note = 'Number of Paragraphs:' +
      this.paragraph.length); */
  }

  /* report to page print for pdf */  
  DownloadtoPDF(){    
    return this.showComponent.emit({ 'page': 'print'});
    /* alert("estos" + this.products.length); */
  }

  showDetail(p: Product) {
    return this.showComponent.emit({ "page": "detail", "product": p });
  }

  showForm(p: Product) {
    if (!p) {
      p = new Product();
    }
    return this.showComponent.emit({ "page": "form", "product": p });
  }

  setProduct(i: number) {
    this.productSelected = i;
  }

  deleteProduct(i: number) {
    const p = this.products[i];
    /*return this.showComponent.emit({"page":"delete","product":p}); */
    console.log('DELETE PROD ' + p.name);
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

      if (this.products.length > 5) {
        this.infiniteScroll.disabled = true;
        return;
      }
    }, 1000);
  }

  public SearchProduct(event) {
    const texto = event.target.value;
    if(texto === '') {
      this.productsFiler = this.products;
    } else {
    this.productsFiler = this.products.filter(elem => {
      // tslint:disable-next-line: no-unused-expression
      console.log(elem.name.toLocaleUpperCase());
      console.log(texto.toLocaleUpperCase());
      elem.name == texto;
    });
    console.log(this.productsFiler)
  }
  }
}
