import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Order } from '../../model/order.model';
import { Product } from 'src/app/pages/product/model/product.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
  @Input() order : Order;
  @Output() showComponent = new EventEmitter<any>();
  @Input() products = new Array<Product>()

  public orderForm:FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    if(this.order){
      this.orderForm = this.fb.group({
        id : new FormControl(null, ),
        productId: new FormControl(this.order.productId, [Validators.required]),
        productName: new FormControl(this.order.productName,),
        description : new FormControl(this.order.description, [Validators.required]),
        count : new FormControl(this.order.count,[Validators.required]),
        totalAmount : new FormControl(this.order.totalAmount,[Validators.required]),
        tmstmp : new FormControl(this.order.tmstmp,)
      });
    } else {
      this.orderForm = this.fb.group({
        id : new FormControl(null, ),
        productId: new FormControl(null, [Validators.required]),
        productName : new FormControl(null, ),
        description : new FormControl(null, [Validators.required]),
        count : new FormControl(null,[Validators.required]),
        totalAmount : new FormControl(null,[Validators.required]),
        tmstmp : new FormControl(null,)
      });
    }
  }

  onSubmit(){
   
    let id = this.orderForm.value.productId;
    let prod:Product = this.products.filter(elem => elem.id == id)[0];
    this.orderForm.value.productName = prod.name;
    //si es editar
    if(this.orderForm.valid && this.order){
      return this.showComponent.emit({"page":"edit","order":this.orderForm.value});
    }
    //else si es agregar nuevo
    if (this.orderForm.valid){
      return this.showComponent.emit({"page":"add","order":this.orderForm.value});
    }
  }

  showList(){
    this.showComponent.emit({"page":"list"});
  }

  onChange($event){
    this.orderForm.value.productId = $event.target.value;
  }

}
