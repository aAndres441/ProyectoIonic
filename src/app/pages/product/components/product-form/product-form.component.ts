import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Product } from '../../model/product.model';
import { Router } from '@angular/router';



/* @IonicPage() */

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {

  @Input() product: Product;
  @Output() showComponent = new EventEmitter<any>();

  public productForm: FormGroup;
  title = 'Add/Edit  product';
  public losProducts: Product[] = [];

  constructor(private fb: FormBuilder,  private router: Router) {

  }

  ngOnInit() {
    this.productForm = new FormGroup({
      /* id : new FormControl(this.product.id, ), */
      nombre : new FormControl(this.product.nombre, [Validators.required]),
      descripcion : new FormControl(this.product.descripcion, [Validators.required, Validators.minLength(4)])
    }
  );

    /* this.productForm = this.createForm(); */

    /* setTimeout(() => {
      alert('Cardona putazo');
    }, 2000); */
  }

  createForm() {
    return this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  onSubmit(){
    console.log("No lee una mierdaa");/* this.productForm.value.nombre +  */
    // si es editar
   /*  if(this.productForm.valid && this.product.id){
      this.productForm.value.id = this.product.id;
    } */
    // else si es agregar nuevo
    /* if (this.productForm.valid){
      return this.showComponent.emit({' page': ' add', ' product': this.productForm.value});
    } */
  }

  submitForm() {
    if (this.productForm.valid) {
      /*  this.submitFormNotification.emit(this.fGroup.value); */
      console.log(this.productForm.value);
    } else {
      this.showErrorAlert(' Debe completar todos los campos.');
    }
    /* this.productForm.reset(); */
  }
  showErrorAlert(arg0: string) {
    alert('ERROR ' + arg0);
  }

  showList() {
    return this.showComponent.emit({' page': 'list'});
  }
  showDetail() {
    return this.showComponent.emit({' page': 'detail'});
  }

  cancel() {
    console.log('cancelo');
    alert('cancelo');
  }
go(){
  this.router.navigateByUrl('/layout/shippingForm');
}
aInicio(){
  this.router.navigateByUrl('/');
/*   <a routerLink="#"> */
}

 back(){
  this.router.navigateByUrl('/layout/lst');
 }
/*  getInputElement() => Promise<HTMLInputElement>
 */
}
