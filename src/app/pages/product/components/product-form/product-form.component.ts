import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { Product } from '../../model/product.model';
import { FormGroup, FormControl, Validators, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input() product : Product;
  @Output() showComponent = new EventEmitter<any>();

  public productForm:FormGroup;

  constructor(private fb : FormBuilder) { 
    this.productForm = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl('',[Validators.required]),
      descripcion: new FormControl('', [Validators.required])
    }
  );
  }

  ngOnInit() {
    /* this.productForm.patchValue({
      id: this.product.id,
      //nombre : this.product.nombre,
      descripcion : this.product.descripcion
    }) */
    
  }

  onSubmit(){
    //si es editar
    if(this.productForm.valid && this.product.id){
      this.productForm.value.id = this.product.id;
    }
    //else si es agregar nuevo
    if (this.productForm.valid){
      return this.showComponent.emit({"page":"add","product":this.productForm.value});
    }
  }

  showList(){
    this.showComponent.emit({"page":"list"});
  }
}
