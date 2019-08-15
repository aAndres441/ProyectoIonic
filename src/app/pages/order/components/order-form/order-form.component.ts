import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Order } from '../../model/order.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
  @Input() order : Order;
  @Output() showComponent = new EventEmitter<any>();

  public orderForm:FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.orderForm = new FormGroup({
        id : new FormControl(this.order.id, ),
        productName : new FormControl(this.order.productName,[Validators.required]),
        description : new FormControl(this.order.description, [Validators.required]),
        cantidad : new FormControl(this.order.count,[Validators.required]),
        totalAmount : new FormControl(this.order.totalAmount,[Validators.required]),
        tmstmp : new FormControl(this.order.tmstmp,[Validators.required])
      }
    );
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
