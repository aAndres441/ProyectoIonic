import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss'],
})
export class ShippingFormComponent implements OnInit {


  title = 'Add shipping';
  shippingForm: FormGroup;

  @Input() fletero: number[];
  @Input() fletes: string[];
  @Output() submitFormNotification = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.shippingForm = this.createForm();
  }
  createForm(): FormGroup {
    return this.fb.group({
      precio: ['', Validators.required],
      text: ['', Validators.required],
      /* fletero: ['', Validators.required], */
      /* fletes: ['', Validators.required], */
      /* precioShipping: ['', Validators.required], */
      /* fechaShippimg:['', Validators.required], */
      /* tmstmp: ['', ] */
    });
  }

  onSubmit() {
    console.log(' onSubmit ');
    console.log(this.shippingForm.value);
  }

  submit() {
    console.log('sale submit');
   /*  if (this.shippingForm.valid) {
      console.log(this.shippingForm.value);
    } else {
      this.showErrorAlert('submit  Debe completar todos los campos.');
    } */
  }
  showErrorAlert(arg0: string) {
    alert(' Method not implemented.');
  }

  addShipping() {
    console.log('addShipping  guardar '  +  this.shippingForm.value);
    this.shippingForm.reset();
  }

  addAlgo(a: HTMLInputElement, s: HTMLInputElement) {  // para decirle que es un imput desde html

    console.log('enviando...' + a.value + '--' + s.value);
  }

}
