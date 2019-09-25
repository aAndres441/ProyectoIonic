import { Sale } from './../../../sale/model/sale.model';
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
  @Input() products = new Array<Product>();
  @Output() actionOrder = new EventEmitter();
  @Input() orders = new Array<Order>();
  @Input() showDetail : string = null;

  detailOrder : Order = null;
  order : Order = null;
  showComponent:string = 'form';

  constructor( private orderService: OrderService, 
    private router: Router ) { }

  ngOnInit() {
    if(this.showDetail){
      this.showComponent = this.showDetail;
    }
    if(this.sale && this.sale.id){
      this.getOrders(this.sale.id);
    }
  }

  initOrder(){
    this.order = {
      id : null,
      count : null,
      description : null,
      productId : null,
      productName : null,
      purchaseId : null,
      saleId : null,
      tmstmp : null,
      unitPrice:null,
      totalAmount : null
    }
  }

  getOrders(saleId:number):void{
    let order : Order;
    this.orderService.getOrders(saleId).subscribe(
      (data:Array<Order>) => {
        data.forEach(elem => {
          order = {
            id : elem.id,
            purchaseId:null,
            saleId:null,
            productId:null,
            productName : elem.productName,
            description : elem.description,
            count : elem.count,
            totalAmount : elem. totalAmount,
            unitPrice: elem.unitPrice,
            tmstmp : elem.tmstmp
          }
          this.orders.push(order);
        });
        console.log(this.orders)
        this.showComponent = 'list';
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
        this.order = obj.order;
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
    this.showComponent = 'list';
    this.actionOrder.emit({'action':'add','order':order});
  }
  newOrder(){
    this.showComponent = 'form';
  }

  deleteOrder(order:Order){
    this.actionOrder.emit({'action':'delete','order':order});
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