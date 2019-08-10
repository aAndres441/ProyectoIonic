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

  @Input() product: Product;
  @Output() submitFormNotification = new EventEmitter<FormGroup>();
  @Output() showListForm = new EventEmitter<any>();

  public fGroup: FormGroup;
  title = 'Add product';
  public losProducts: Product[] = [];

  constructor(private fb: FormBuilder, public navCtrl: NavController) {

  }

  ngOnInit() {
    this.fGroup = this.createForm();

    /* setTimeout(() => {
      alert('Cardona putazo');
    }, 2000); */
  }

  createForm() {
    return this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required, Validators.minLength(4)]
    });
  }

  submitForm() {
    if (this.fGroup.valid) {
      /*  this.submitFormNotification.emit(this.fGroup.value); */
      console.log(this.fGroup.value);
    } else {
      this.showErrorAlert(' Debe completar todos los campos.')
    }
    /* this.productForm.reset(); */
  }
  showErrorAlert(arg0: string) {
    alert('ERROR ' + arg0);
  }

  showList() {
    return this.showListForm.emit('list');
  }
  showDetail() {
    return this.showListForm.emit('detail');
  }

  cancel() {
    console.log('cancelo');
    alert('cancelo');
  }

  
}
