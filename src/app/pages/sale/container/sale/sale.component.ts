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
  detailSale : Sale;
  sale : Sale = null;
  showComponent:string = 'list';
  clients = new Array<Person>();
  products = new Array<Product>();
  unSuscribe : any;
  
  constructor( private saleService: SaleService, 
    private clientService :PersonService,
    private productService:ProductService,
    private orderService:OrderService,
    private router: Router ) { }

  
  ngOnInit(): void {
    this.getSales();
  }

  onDestroy(){
    this.unSuscribe.unSuscribe();
  }
  
  getSales():void{
    this.unSuscribe = this.saleService.getSales().subscribe(
      (data:Array<Sale>) => {
        this.sales = data;
      }
    );
  }

  getClients(){
    this.unSuscribe = this.clientService.getPersons().subscribe(
      (data:Array<Person>)=>{
        this.clients = data,
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
        if(obj.sale){
          this.sale = obj.sale;
        }else {
          this.sale = null;
        }
        this.getClients();
        break; 
      }
      case "add": { 
        this.addSale(obj.sale,obj.orders);
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

  addSale(sale:Sale, orders:Array<Order>){
    this.unSuscribe = this.saleService.addSale(sale).subscribe(
      (data) => {
        console.log("Venta agregada!");
        this.saleService.getId().subscribe( (id) => {
          orders.forEach(elem => {
            elem.saleId = id;
            this.orderService.addOrder(elem).subscribe();
          })
        });
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
