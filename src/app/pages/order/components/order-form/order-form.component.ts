import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Order } from '../../model/order.model';
import { Product } from 'src/app/pages/product/model/product.model';
import { isNullOrUndefined } from 'util';

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
    if(isNullOrUndefined(this.order)){
      this.order = {
        id:null,
        productId:null,
        productName:null,
        purchaseId:null,
        saleId:null,
        count:null,
        description:null,
        totalAmount:null,
        tmstmp:null
      }
    }
    if(isNullOrUndefined(this.order.id)){
      this.orderForm = this.fb.group({
        id : new FormControl(null, ),
        productName : new FormControl(this.order.productName,[Validators.required]),
        description : new FormControl(this.order.description, [Validators.required]),
        count : new FormControl(this.order.count,[Validators.required]),
        totalAmount : new FormControl(this.order.totalAmount,[Validators.required]),
        tmstmp : new FormControl(this.order.tmstmp,[Validators.required]),
        total : new FormControl(this.order.count * this.order.totalAmount)
      })
    }else {
      this.orderForm = this.fb.group({
        id : new FormControl(this.order.id, ),
        productName : new FormControl(this.order.productName,[Validators.required]),
        description : new FormControl(this.order.description, [Validators.required]),
        count : new FormControl(this.order.count,[Validators.required]),
        totalAmount : new FormControl(this.order.totalAmount,[Validators.required]),
        tmstmp : new FormControl(this.order.tmstmp,[Validators.required]),
        total : new FormControl(this.order.count * this.order.totalAmount)
      })
    }
  }

  get total (){
    return this.orderForm.get('total').value;
  }

  onSubmit(){
    //si es editar
    if(this.orderForm.valid && this.order.id){
      this.orderForm.value.id = this.order.id;
    }
    //else si es agregar nuevo
    if (this.orderForm.valid){
      return this.showComponent.emit({"page":"add","order":this.orderForm.value});
    }
  }

  showList(){
    this.showComponent.emit({"page":"list"});
  }

}
