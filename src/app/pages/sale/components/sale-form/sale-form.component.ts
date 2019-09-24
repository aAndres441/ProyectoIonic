import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Sale } from '../../model/sale.model';
import { Person } from 'src/app/pages/person/model/person.model';
import { Order } from 'src/app/pages/order/model/order.model';
import { Product } from 'src/app/pages/product/model/product.model';

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
  @Input() orders = new Array<Order>();

  public saleForm:FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    if(this.sale){
      this.saleForm = this.fb.group({
        id : new FormControl(this.sale.id),
        clientId : new FormControl(this.sale.clientId,[Validators.required]),
        clientName : new FormControl(this.sale.clientName,),
        description : new FormControl(this.sale.description, [Validators.required]),
        orders : new FormControl(this.orders,),
        totalAmount : new FormControl(this.sale.totalAmount,)
      });
    } else {
      this.saleForm = this.fb.group({
        id : new FormControl(null,),
        clientId : new FormControl(null,[Validators.required]),
        clientName : new FormControl(null,),
        description : new FormControl(null, [Validators.required]),
        orders : new FormControl(null,),
        totalAmount : new FormControl(null)
      });
    }
    
  }
 
  onSubmit(){

    let id = this.saleForm.value.clientId;
    let cli :Person = this.clients.filter(elem => elem.id == id)[0];
    this.saleForm.value.clientName = cli.name;
    this.saleForm.value.totalAmount = this.totalCalculation();

    //si es editar
    if(this.saleForm.valid && this.sale){
      this.saleForm.value.id = this.sale.id;
    }
    //else si es agregar nuevo
    if (this.saleForm.valid && this.orders.length > 0){
      this.saleForm.value.orders = this.orders;
      console.log(this.saleForm);
      return this.showComponent.emit({"page":"add","sale":this.saleForm.value});
    }
  }

  showList(){
    this.showComponent.emit({"page":"list"});
  }

  actionOrder(event:any){
    switch(event.action){
      case'add':{
        this.orders.push(event.order);
        break
      }case'delete':{
        let index = this.orders.indexOf(event.order);
        this.orders.splice(index,1);
        break
      }case'edit':{
        let index = this.orders.indexOf(event.order);
        this.orders.splice(index,1);
        this.orders.push(event.order);
        break
      }
    }
    
  }
  onChange($event){
    this.saleForm.value.clientId = $event.target.value;
  }

  totalCalculation():number{
    let resp:number = 0;
    this.orders.forEach(
      (elem:Order) => {
        resp += elem.count * elem.totalAmount;
      }
    );
    return resp;
  }
}
