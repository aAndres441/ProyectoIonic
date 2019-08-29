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
  showOrder : string = 'form';
  orders = new Array<Order>();

  public saleForm:FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    if(this.sale && this.sale.id){
      this.showOrder = 'list';
      this.saleForm = this.fb.group({
        id : new FormControl(this.sale.id),
        clientName : new FormControl(this.sale.clientName,[Validators.required]),
        description : new FormControl(this.sale.description, [Validators.required]),
      });
    }else {
      this.showOrder = 'form';
      this.saleForm = this.fb.group({
        id : new FormControl(null),
        clientName : new FormControl(null,[Validators.required]),
        description : new FormControl(null, [Validators.required]),
      });
    }
    
  }
 
  onSubmit(){
    //si es editar
    if(this.saleForm.valid && this.sale){
      this.saleForm.value.id = this.sale.id;
    }
    //else si es agregar nuevo
    if (this.saleForm.valid && this.orders.length > 0){
      console.log(this.saleForm);
      console.log(this.orders);
      //return this.showComponent.emit({"page":"add","sale":this.saleForm.value,"orders":this.orders});
    }
  }

  showList(){
    this.showComponent.emit({"page":"list"});
  }

  actionOrder(event:any){
    this.orders = event.orders;
  }
  
}
