import { Component, OnInit } from '@angular/core';
import { Sale } from '../../model/sale.model';
import { SaleService } from 'src/app/services/sale.service';
import { Router } from '@angular/router';
import { Person } from 'src/app/pages/person/model/person.model';
import { Product } from 'src/app/pages/product/model/product.model';
import { PersonService } from 'src/app/services/person.service';
import { ProductService } from 'src/app/services/product.service';
import { Order } from 'src/app/pages/order/model/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent implements OnInit {
  sales : Array<Sale> = new Array<Sale>();
  sale : Sale = null;
  detailSale : Sale;
  
  showComponent:string = 'list';
  clients = new Array<Person>();
  products = new Array<Product>();
  unSuscribe : any;
  
  constructor( private saleService: SaleService, 
    private clientService :PersonService,
    private productService:ProductService,
    private orderService:OrderService ) { }

  ngOnInit(): void {
    this.getSales();
  }
  
  getSales():void{
    this.unSuscribe = this.saleService.getSales().subscribe(
      (data:Array<Sale>) => {
        this.sales = data;
      }
    );
  }

  getClients(){
    this.unSuscribe = this.clientService.getPersonsType("Cliente").subscribe(
      (data:Array<Person>) => {
        this.clients = data
        this.getProducts()
      } 
    );
  }

  getProducts(){
    this.unSuscribe = this.productService.getProducts().subscribe(
      (data:Array<Product>)=>{
        this.products = data
        this.showComponent = "form";
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
        this.sale = obj.sale;
        this.getClients();
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

  addSale(sale:any){
  
    this.unSuscribe = this.saleService.addSale(sale).subscribe(
      () => {
        this.saleService.getId().subscribe( (data:any) => {
          let id = data.id;
          sale.orders.forEach(elem => {
            let order : Order = {
              id : null,
              purchaseId:null,
              saleId:id,
              productId:elem.productId,
              productName : elem.productName,
              description : elem.description,
              count : elem.count,
              unitPrice:elem.unitPrice,
              totalAmount : elem. totalAmount,
              tmstmp : elem.tmstmp
            }
            this.orderService.addOrder(order).subscribe();
          })
        });
        this.getSales();
        this.showComponent = "list";
      },(error) => {
        this.showComponent = "form";
      }
    );
  }

  deleteSale(sale:Sale){
    this.saleService.deleteSale(sale).subscribe(
      (data) => {
        this.getSales();
        this.showComponent = "list";
      },(error) => {
        this.showComponent = "list";
      }
    );
  }

}
