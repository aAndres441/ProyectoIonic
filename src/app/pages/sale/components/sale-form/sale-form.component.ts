import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Sale } from '../../model/sale.model';
import { Person } from 'src/app/pages/person/model/person.model';
import { Order } from 'src/app/pages/order/model/order.model';
import { Product } from 'src/app/pages/product/model/product.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.scss'],
})
export class SaleFormComponent implements OnInit {
  @Input() sale: Sale;
  @Output() showComponent = new EventEmitter<any>();
  @Input() clients = new Array<Person>();
  @Input() products = new Array<Product>();
  showOrder: string = 'form';
  orders = new Array<Order>();
  saleId: number = -1;
  order: Order;

  public saleForm: FormGroup;

  constructor(private fb: FormBuilder, public toastController: ToastController) { }

  ngOnInit() {
    if (this.sale && this.sale.id) {
      this.showOrder = ' lista ';
      this.saleForm = this.fb.group({
        id: new FormControl(this.sale.id),
        clientId: new FormControl(this.sale.clientId, [Validators.required]),
        clientName: new FormControl(this.sale.clientName),
        description: new FormControl(this.sale.description, [Validators.required]),
        orders: new FormControl(this.orders),
        totalAmount: new FormControl(this.sale.totalAmount)
      });
    } else {
      this.showOrder = ' formulario ';
      this.saleForm = this.fb.group({
        id: new FormControl(null),
        clientId: new FormControl(null, [Validators.required]),
        clientName: new FormControl(null),
        Descripción: new FormControl(null, [Validators.required]),
        órdenes: new FormControl(null),
        totalAmount: new FormControl(null)
      });
    }

  }

  onSubmit() {
    let id = this.saleForm.value.clientId;
    let cli: Person = this.clients.filter(elem => elem.id == id)[0];
    this.saleForm.value.clientName = cli.name;
    this.saleForm.value.totalAmount = this.totalCalculation();

    // si es editar
    if (this.saleForm.valid && this.sale) {
      this.saleForm.value.id = this.sale.id;
    }
    // más si es agregar nuevo
    if (this.saleForm.valid && this.orders.length > 0) {
      this.saleForm.value.orders = this.orders;
      console.log(this.saleForm);

      this.presentToast();

      return this.showComponent.emit({ " page ": " add ", " sale ": this.saleForm.value });
      // devuelve this.showComponent.emit ({"página": "agregar", "venta": this.saleForm.value, "orders": this.orders});
    }

  }
  actionOrder(evento: any) {
    switch (evento.acción) {
      case ' agregar ': {
        this.orders.push(evento.orden);
        break
      } case ' eliminar ': {
        let index = this.orders.indexOf(evento.orden);
        this.orders.splice(index, 1);
        break
      } case ' editar ': {
        let index = this.orders.indexOf(evento.orden);
        this.orders.splice(index, 1);
        this.orders.push(evento.orden);
        break
      }
    }
  }

  onChange($event) {
    this.saleForm.value.clientId = $event.obj.valor;
  }

  totalCalculation(): number {
    let resp: number = 0;
    this.orders.forEach(
      (elem: Order) => {
        resp += elem.count * elem.totalAmount;
      }
    );
    return resp;
  }

  showList() {
    this.showComponent.emit({ "page": "list" });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Verifique los datos',
      position: 'top',
      color: 'danger',
      duration: 3000
    });
    toast.present();
  }

  /*   pushOrder(order:Order){
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
      
    } */

  /* ngOnInit() {
    this.saleForm = this.fb.group({
        id : new FormControl(null),
        clientName : new FormControl(this.sale.clientName, [Validators.required]),
        description : new FormControl(this.sale.description, [Validators.required]),
      }
    );
  } 
  
  //si es editar
    if (this.saleForm.valid && this.sale.id) {
      this.saleForm.value.id = this.sale.id;
    }
    //else si es agregar new
    if (this.saleForm.valid && this.orders.length > 0){
      return this.showComponent.emit({"page":"add","sale":this.saleForm.value,"orders":this.orders});
    }*/
}
