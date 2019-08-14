import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @Input() product : Product;
  @Output() showComponent = new EventEmitter<any>();

  public productForm:FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.productForm = new FormGroup({
        id : new FormControl(this.product.id, ),
        nombre : new FormControl(this.product.nombre,[Validators.required]),
        descripcion : new FormControl(this.product.descripcion, [Validators.required])
      }
    );
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

  guardar() {
  }

  editProducto(){
  }

  showList(){
    this.showComponent.emit({"page":"list"});
  }
}
