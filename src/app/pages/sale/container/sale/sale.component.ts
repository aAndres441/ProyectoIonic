import { Component, OnInit } from '@angular/core';
import { Sale } from '../../model/sale.model';
import { SaleService } from 'src/app/services/sale.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent implements OnInit {
  sales : Array<Sale> = new Array<Sale>();
  detailSale : Sale;
  sale : Sale = null;
  showComponent:string = 'list';
  
  constructor( private saleService: SaleService, 
    private router: Router ) { }

  
  ngOnInit(): void {
    this.getSales();
  }

  getSales():void{
    let sale : Sale;
    this.saleService.getSales().subscribe(
      (data:Array<Sale>) => {
        this.sales = data;
      }
    );
  }


  showPage(obj:any) {
    let sale;
    let showAction = obj.page;
    switch(showAction) { 
      case "detail": { 
        this.showComponent = "detail";
        this.detailSale = obj.sale; 
        break; 
      } 
      case "list": { 
        this.showComponent = "list";
        break; 
      } 
      case "form": { 
        this.showComponent = "form";
        if(obj.sale){
          this.sale = obj.sale;
        }else {
          this.sale = null;
        }
        break; 
      }
      case "add": { 
        this.addSale(obj.sale);
        break; 
      }
      case "delete": { 
        sale = obj.sale;
        if(sale){
          this.deleteSale(sale);
        }
        break; 
      }   
      default: { 
        this.showComponent = "list";
        break; 
      } 
   } 
  } 

  addSale(sale:Sale){
    this.saleService.addSale(sale).subscribe(
      (data) => {
        console.log("Sale agregado!")
        this.getSales();
        this.showComponent = "list";
      },(error) => {
        console.log('ERROR addSale:');
        console.log(error);
        this.showComponent = "form";
      }
    );
  }

  deleteSale(sale:Sale){
    this.saleService.deleteSale(sale).subscribe(
      (data) => {
        console.log("Sale borrado!")
        this.getSales();
        this.showComponent = "list";
      },(error) => {
        console.log('ERROR deleteSale:');
        console.log(error);
        this.showComponent = "list";
      }
    );
  }

}
