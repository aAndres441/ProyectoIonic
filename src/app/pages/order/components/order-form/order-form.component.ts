import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { AlertController} from '@ionic/angular';
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
  @Output() pushOrder = new EventEmitter<any>();
  public title: 'FORMULARIO';
  public orderForm: FormGroup;

  constructor(private fb: FormBuilder, private alert: AlertController) { }

  ngOnInit() {
    if(isNullOrUndefined(this.order)){
      this.initOrder();
      /* this.orderForm = this.createForm(); */
    }
    this.orderForm = this.fb.group({
      id : new FormControl(null, ),
      productName : new FormControl(this.order.productName,[Validators.required]),
      description : new FormControl(this.order.description, [Validators.required]),
      count : new FormControl(this.order.count,[Validators.required]),
      totalAmount : new FormControl(this.order.totalAmount,[Validators.required]),
      tmstmp : new FormControl(this.order.tmstmp,)
    });
  }

  initOrder(){
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
  
  onSubmit(){
    //si es editar
    if(this.orderForm.valid && this.order.id){
      this.orderForm.value.id = this.order.id;
    }
    //else si es agregar nuevo
    if (this.orderForm.valid){
      this.pushOrder.emit(this.orderForm.value);
      this.orderForm.reset();
      //return this.showComponent.emit({"page":"add","order":this.orderForm.value});
    }
  }

  showList(){
    this.showComponent.emit({"page":"list"});
  }
  
  get name(){
    return this.orderForm.get('name');
  }
  get description(){
    return this.orderForm.get('description');
  }

async showAlert(){
  const alert = await this.alert.create({
    header: 'Howdy',
    message: 'You have been guarned!!',
    buttons: ['Kewl']
  });
  await alert.present();
}

onReset(){
  alert ("this.orderForm.reset();" + this.orderForm.value);
}

}
