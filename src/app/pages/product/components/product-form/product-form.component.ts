import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { Product } from '../../model/product.model';
import { FormGroup, FormControl, Validators, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product;
  @Output() showComponent = new EventEmitter<any>();
  public title: 'FORMULARIO';

  public productForm: FormGroup;

  constructor(private fb: FormBuilder, private alert: AlertController) { 
    
  }

  ngOnInit() { 
    if (this.product) {
    this.productForm = this.createForm();
  }
  /* setTimeout(() => {
    alert('Cardona putazo');
  }, 2000); */
  
    /* if(this.product){
      this.productForm = this.fb.group({
        id: new FormControl(this.product.id,),
        nombre: new FormControl(this.product.name,[Validators.required]),
        descripcion: new FormControl(this.product.description, [Validators.required])
      }); 
    }*/
  }
  createForm() {
    return this.fb.group({
       id: new FormControl(this.product.id),
       name: new FormControl(this.product.name, [Validators.required]),
      description: new FormControl(this.product.description, [Validators.required, Validators.minLength(4), Validators.maxLength(200)])
   
      /* Usamos la formBuilder.groupfunción para crear nuestro FormGroup al proporcionar 
      un objeto que contiene cada uno de nuestros FormControls . 
      También debemos establecer la formGrouppropiedad en el padre
       <form>para que tenga el mismo nombre que nuestro grupo FormBuilder */
      /* name: [this.product.name, [Validators.required]],
      description:[this.product.description, [Validators.required, Validators.minLength(4), Validators.maxLength(200)]] */
    });
  }

  onSubmit(){
    /* console.log(this.productForm.value.description + '--' ); */

    //si es editar
    if(!this.productForm.valid && this.product.id){
      this.productForm.value.id = this.product.id;
      console.log("11" + this.productForm.value.name);

    }
    //else si es agregar nuevo
    if (!this.productForm.valid){
      console.log("12" + this.productForm.value.description+'*******');
      // return this.showComponent.emit({"page":"add","product":this.productForm.value});
      
    }
  }

  showList(){
    this.showComponent.emit({"page":"list"});
  }
  
  get name(){
    return this.productForm.get('name');
  }
  get description(){
    return this.productForm.get('description');
  }

async showAlert(){
  const alert = await this.alert.create({
    header: 'Howdy',
    message: 'You have been guarned!!',
    buttons: ['Kewl']
  });
  await alert.present();
}



}
