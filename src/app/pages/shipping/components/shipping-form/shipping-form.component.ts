import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss'],
})
export class ShippingFormComponent implements OnInit {


  title = 'Add shipping';
  shippingForm: any = {};
  flete:string[];
  @Input() fletero: number[];
  @Input() fletes: string[];
  @Output() submitFormNotification = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder, private router: Router) { 
    this.flete = ["a","s","t"];
  }
  
  ngOnInit() {
    this.shippingForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      fletero: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]], 
      fletes: ['', Validators.required], 
      precioShipping: ['', Validators.required],
      fechaShippimg:['', Validators.required],
      tmstmp: ['', ]
    });
  }

  addShipping() {
    console.log('addShipping  guardar '  +  this.shippingForm.value);
    /*  if (this.shippingForm.valid) {
      console.log(this.shippingForm.value);
    } else {
      this.showErrorAlert('submit  Debe completar todos los campos.');
    } */
    this.shippingForm.reset();
  }

  showErrorAlert(arg0: string) {
    alert(' Method not implemented.');
  }
 
  cancel(){
    alert('cancela');
  }
  
  resetForm(){
    this.shippingForm.reset();
  }

  addAlgo(a: HTMLInputElement, s: HTMLInputElement) {  // para decirle que es un imput desde html
    console.log('enviando...' + a.value + '--' + s.value);
  }

}
