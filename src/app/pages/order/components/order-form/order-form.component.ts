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
        productoId : new FormControl(this.order.productoId,[Validators.required]),
        descripcion : new FormControl(this.order.descripcion, [Validators.required])
      }
    );
  }
 /*  id : number;
    productoId : number;
    ventaId : number;
    compraId : number;
    descripcion : string;
    cantidad : number;
    montoTotal : number;
    tmstmp : Date; */

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
