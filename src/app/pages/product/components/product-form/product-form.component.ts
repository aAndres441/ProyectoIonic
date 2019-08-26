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

  constructor(private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    if (this.product) {
      this.productForm = this.createForm();
    }
    /* setTimeout(() => {
      alert('Cardona putazo');
    }, 2000); */
  }

  createForm() {
    return this.fb.group({
      /*  id: new FormControl(this.product.id,), */
      /* name: new FormControl(this.product.name, [Validators.required]),
      description: new FormControl(this.product.description, [Validators.required, Validators.minLength(4), Validators.maxLength(200)]) */
   
      /* Usamos la formBuilder.groupfunción para crear nuestro FormGroup al proporcionar 
      un objeto que contiene cada uno de nuestros FormControls . 
      También debemos establecer la formGrouppropiedad en el padre
       <form>para que tenga el mismo nombre que nuestro grupo FormBuilder */
      name: [this.product.name, [Validators.required]],
      description:[this.product.description, [Validators.required, Validators.minLength(4), Validators.maxLength(200)]]
    });
  }
  onSubmit() {
    console.log("No lee una mierdaa");/* this.productForm.value.nombre +  */

    //si es editar
    if (this.productForm.valid && this.product.id) {
      this.productForm.value.id = this.product.id;
    }
    //else si es agregar nuevo
    if (this.productForm.valid) {
      return this.showComponent.emit({ "page": "add", "product": this.productForm.value });
    }
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
    return this.showComponent.emit({ ' page': 'list' });
  }
  /*  showList(){
    this.showComponent.emit({"page":"list"});
  } */
  
  showDetail() {
    return this.showComponent.emit({ ' page': 'detail' });
  }

  cancel() {
    console.log('cancelo');
    alert('cancelo');
  }
  go() {
    this.router.navigateByUrl('/layout/shippingForm');
  }
  aInicio() {
    this.router.navigateByUrl('/');
    /*   <a routerLink="#"> */
  }

  back() {
    this.router.navigateByUrl('/layout/lst');
  }
  /*  getInputElement() => Promise<HTMLInputElement>
   */
}
