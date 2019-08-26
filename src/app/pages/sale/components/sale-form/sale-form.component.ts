import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Sale } from '../../model/sale.model';
import { PersonService } from 'src/app/services/person.service';
import { Order } from 'src/app/pages/order/model/order.model';
import { Product } from 'src/app/pages/product/model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Person } from 'src/app/pages/person/model/person.model';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.scss'],
})
export class SaleFormComponent implements OnInit {
  @Input() sale : Sale;
  @Output() showComponent = new EventEmitter<any>();
  @Input() clients = new Array<Person>();
  @Input() products = new Array<Product>();
  showOrder : boolean = true;
  orders = new Array<Order>();
  saleId : number = -1;
  order : Order;
  

  public saleForm:FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.saleForm = this.fb.group({
        id : new FormControl(null),
        clientName : new FormControl(this.sale.clientName,[Validators.required]),
        description : new FormControl(this.sale.description, [Validators.required]),
      }
    );
  }
 
  onSubmit(){
    //si es editar
    if(this.saleForm.valid && this.sale.id){
      this.saleForm.value.id = this.sale.id;
    }
    //else si es agregar nuevo
    if (this.saleForm.valid && this.orders.length > 0){
      return this.showComponent.emit({"page":"add","sale":this.saleForm.value,"orders":this.orders});
    }
  }

  showList(){
    this.showComponent.emit({"page":"list"});
  }

  pushOrder(order:Order){
    this.showOrder = false;
    console.log(order)
    this.orders.push(order);
    console.log(this.orders)
  }
  newOrder(){
    this.showOrder = true;
  }

  removeOrder(order:Order){
    let index = this.orders.indexOf(order);
    this.orders.splice(index,1);
  }

  editOrder(order:Order){
    
  }
}
