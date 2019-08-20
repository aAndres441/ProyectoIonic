import { ProductService } from './../../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from '../../model/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orders : Array<Order> = new Array<Order>();
  detailOrder : Order = new Order();
  order : Order = null;
  showComponent:string = 'list';
  
  constructor( private orderService: OrderService, 
    private router: Router ) { }

  
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders():void{
    let order : Order;
    this.orderService.getOrders().subscribe(
      (data:Array<Order>) => {
        data.forEach(elem => {
          order = new Order();
          order.id = elem.id;
          order.productName = elem.productName;
          order.description = elem.description;
          order.count = elem.count;
          order.totalAmount = elem. totalAmount;
          order.tmstmp = elem.tmstmp;
          this.orders.push(order);
        });
      }
    );
  }

  getOrder(saleId:number):void{
    let order : Order;
    this.orderService.getOrder(saleId).subscribe(
      (data:Array<Order>) => {
        data.forEach(elem => {
          order = new Order();
          order.id = elem.id;
          order.productName = elem.productName;
          order.description = elem.description;
          order.count = elem.count;
          order.totalAmount = elem. totalAmount;
          order.tmstmp = elem.tmstmp;
          this.orders.push(order);
        });
      }
    );
  }


  showPage(obj:any) {
    let order;
    let showAction = obj.page;
    switch(showAction) { 
      case "detail": { 
        this.showComponent = "detail";
        this.detailOrder = obj.order; 
        break; 
      } 
      case "list": { 
        this.showComponent = "list";
        break; 
      } 
      case "form": { 
        this.showComponent = "form";
        if(obj.order){
          this.order = obj.order;
        }else {
          this.order = null;
        }
        break; 
      }
      case "add": { 
        this.addOrder(obj.order);
        break; 
      }
      case "delete": { 
        order = obj.order;
        if(order){
          this.deleteOrder(order);
        }
        break; 
      } 
      case "sale": { 
        let saleId = obj.saleId;
        if(saleId){
          this.getOrder(saleId);
        }
        break; 
      }  
      default: { 
        this.showComponent = "list";
        break; 
      } 
   } 
  } 

  addOrder(order:Order){
    this.orderService.addOrder(order).subscribe(
      (data) => {
        console.log("Order agregado!")
        this.getOrders();
        this.showComponent = "list";
      },(error) => {
        console.log('ERROR addOrder:');
        console.log(error);
        this.showComponent = "form";
      }
    );
  }

  deleteOrder(order:Order){
    this.orderService.deleteOrder(order).subscribe(
      (data) => {
        console.log("Order borrado!")
        this.getOrders();
        this.showComponent = "list";
      },(error) => {
        console.log('ERROR deleteOrder:');
        console.log(error);
        this.showComponent = "list";
      }
    );
  }
}