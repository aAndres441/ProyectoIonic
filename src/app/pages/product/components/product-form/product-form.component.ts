import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Product } from '../../model/product.model';



/* @IonicPage() */

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {

  myForm: FormGroup;

  @Input() product: Product;
  @Output() submitFormNotification = new EventEmitter<FormGroup>();
  @Output() showListForm = new EventEmitter<any>();

  productForm: FormGroup;
  title = 'Add product';
  losProducts: Product[] = [];

  constructor(private fb: FormBuilder, public navCtrl: NavController) {

  }

  ngOnInit() {
    this.myForm = this.createForm();
  }

  showList() {
    return this.showListForm.emit('list');
  }
  showDetail() {
    return this.showListForm.emit('detail');
  }

  createForm() {
    return this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dateBirth: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }
  saveData(){
    console.log(this.myForm.value);
  }

  cancel() {
    console.log('cancelo');
    alert('cancelo');
  }

  onSubmit(): void {
    const form: Product = Object.assign({}, this.product);
    console.warn('Your order has been submitted');
    if (this.productForm.valid) {
      this.submitFormNotification.emit(this.productForm.value);
      console.log(form.nombre.toUpperCase());
    }
    // this.productForm.reset();
  }
  submit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
    } else {
      this.showErrorAlert('Debe completar todos los campos.')
    }
  }
  showErrorAlert(arg0: string) {
   alert( ' Method not implemented.');
  }
}
