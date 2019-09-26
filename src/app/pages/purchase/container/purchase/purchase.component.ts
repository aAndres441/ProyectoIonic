import { Component, OnInit } from '@angular/core';
import { Purchase } from '../../model/purchase.model';
import { PurchaseService } from 'src/app/services/purchase.service';
import { Router } from '@angular/router';
import { Person } from 'src/app/pages/person/model/person.model';
import { Product } from 'src/app/pages/product/model/product.model';
import { PersonService } from 'src/app/services/person.service';
import { ProductService } from 'src/app/services/product.service';
import { Order } from 'src/app/pages/order/model/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit {
  purchases : Array<Purchase> = new Array<Purchase>();
  purchase : Purchase = null;
  detailPurchase : Purchase;
  
  showComponent:string = '';
  clients = new Array<Person>();
  products = new Array<Product>();
  unSuscribe : any;
  
  constructor( private purchaseService: PurchaseService, 
    private clientService :PersonService,
    private productService:ProductService,
    private orderService:OrderService ) { }

  ngOnInit(): void {
    this.getPurchases();
  }
  
  getPurchases():void{
    this.unSuscribe = this.purchaseService.getPurchases().subscribe(
      (data:Array<Purchase>) => {
        this.purchases = data;
        this.showComponent = 'list'
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
    let purchase;
    let showAction = obj.page;
    switch(showAction) { 
      case "detail": { 
        this.showComponent = "detail";
        this.detailPurchase = obj.purchase; 
        break; 
      } 
      case "list": { 
        this.showComponent = "list";
        break; 
      } 
      case "form": { 
        this.purchase = obj.purchase;
        this.getClients();
        break; 
      }
      case "add": { 
        this.addPurchase(obj.purchase);
        break; 
      }
      case "delete": { 
        purchase = obj.purchase;
        if(purchase){
          this.deletePurchase(purchase);
        }
        break; 
      }   
      default: { 
        this.showComponent = "list";
        break; 
      } 
   } 
  } 

  addPurchase(purchase:any){
  
    this.unSuscribe = this.purchaseService.addPurchase(purchase).subscribe(
      () => {
        this.purchaseService.getId().subscribe( (data:any) => {
          let id = data.id;
          purchase.orders.forEach(elem => {
            let order : Order = {
              id : null,
              saleId:null,
              purchaseId:id,
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
        this.getPurchases();
        this.showComponent = "list";
      },(error) => {
        this.showComponent = "form";
      }
    );
  }

  deletePurchase(purchase:Purchase){
    this.purchaseService.deletePurchase(purchase).subscribe(
      (data) => {
        this.getPurchases();
        this.showComponent = "list";
      },(error) => {
        this.showComponent = "list";
      }
    );
  }

}
