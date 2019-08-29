import { Sale } from './../../../sale/model/sale.model';
import { ProductService } from './../../../../services/product.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from '../../model/order.model';
import { Router } from '@angular/router';
import { Product } from 'src/app/pages/product/model/product.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @Input() sale:Sale;
  @Input() showOrder:string;
  @Input() products = new Array<Product>();
  @Output() actionOrder = new EventEmitter();

  orders = new Array<Order>();
  detailOrder : Order = new Order();
  order : Order = null;
  showComponent:string;


  constructor( private orderService: OrderService, 
    private router: Router ) { }

  
  ngOnInit(): void {
    this.showComponent = this.showOrder;
    if(this.sale.id>0){
      this.getOrders(this.sale.id);
    }
    
  }

  getOrders(saleId:number):void{
    let order : Order;
    this.orderService.getOrders(saleId).subscribe(
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
        this.detailOrder = obj.order; 
        this.showComponent = "detail";
        break; 
      } 
      case "list": { 
        this.showComponent = "list";
        break; 
      } 
      case "form": { 
        if(obj.order){
          this.order = obj.order;
        }else {
          this.order = null;
        }
        this.showComponent = "form";
        break; 
      }
      case "add": { 
        this.addOrder(obj.order);
        break; 
      }case "edit": { 
        this.editOrder(obj.order);
        break; 
      }
      case "delete": { 
        order = obj.order;
        if(order){
          this.deleteOrder(order);
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
    this.orders.push(order);
    this.showComponent = 'list';
    this.actionOrder.emit({'orders':this.orders});
  }
  newOrder(){
    this.showComponent = 'form';
  }

  deleteOrder(order:Order){
    let index = this.orders.indexOf(order);
    this.orders.splice(index,1);
    this.actionOrder.emit({'orders':this.orders});
  }

  editOrder(order:Order){
    //encuentro y elimino el pedido viejo
    let index = this.orders.indexOf(order);
    this.orders.splice(index,1);
    //agrego el nuevo a la lista y emito el evento
    this.orders.push(order);
    this.showComponent = 'list';
    this.actionOrder.emit({'orders':this.orders});
  }
  

}