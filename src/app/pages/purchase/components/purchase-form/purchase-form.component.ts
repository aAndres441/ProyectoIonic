import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Purchase } from '../../model/purchase.model';
import { Person } from 'src/app/pages/person/model/person.model';
import { Order } from 'src/app/pages/order/model/order.model';
import { Product } from 'src/app/pages/product/model/product.model';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.scss'],
})
export class PurchaseFormComponent implements OnInit {
  @Input() purchase : Purchase;
  @Output() showComponent = new EventEmitter<any>();
  @Input() clients = new Array<Person>();
  @Input() products = new Array<Product>();
  @Input() orders = new Array<Order>();

  public purchaseForm:FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    if(this.purchase){
      this.purchaseForm = this.fb.group({
        id : new FormControl(this.purchase.id),
        clientId : new FormControl(this.purchase.clientId,[Validators.required]),
        clientName : new FormControl(this.purchase.clientName,),
        description : new FormControl(this.purchase.description,  ),
        orders : new FormControl(this.orders,),
        totalAmount : new FormControl(this.purchase.totalAmount,)
      });
    } else {
      this.purchaseForm = this.fb.group({
        id : new FormControl(null,),
        clientId : new FormControl(null,[Validators.required]),
        clientName : new FormControl(null,),
        description : new FormControl(null,  ),
        orders : new FormControl(null,),
        totalAmount : new FormControl(null)
      });
    }
    
  }
 
  onSubmit(){

    let id = this.purchaseForm.value.clientId;
    let cli :Person = this.clients.filter(elem => elem.id == id)[0];
    this.purchaseForm.value.clientName = cli.name;
    this.purchaseForm.value.totalAmount = this.totalCalculation();

    //si es editar
    if(this.purchaseForm.valid && this.purchase){
      this.purchaseForm.value.id = this.purchase.id;
    }
    //else si es agregar nuevo
    if (this.purchaseForm.valid && this.orders.length > 0){
      this.purchaseForm.value.orders = this.orders;
      console.log(this.purchaseForm);
      return this.showComponent.emit({"page":"add","purchase":this.purchaseForm.value});
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
    this.purchaseForm.value.clientId = $event.target.value;
  }

  totalCalculation():number{
    let resp:number = 0;
    this.orders.forEach(
      (elem:Order) => {
        resp += elem.totalAmount;
      }
    );
    return resp;
  }
}
