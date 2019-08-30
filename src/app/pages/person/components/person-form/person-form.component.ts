import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Person} from '../../model/person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent implements OnInit {

  @Input() person: Person;
  @Output() submitFormNotification = new EventEmitter<FormGroup>();
  @Output() showListForm = new EventEmitter<any>();

  private showDiv = false;
  personForm: FormGroup;
  // tslint:disable-next-line: max-line-length
  emailPattern: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  telPattern: any = [0 - 9 ] ;  // "[A-Za-z0-9]+";
  title = 'Add Person';
  persons: Person[] = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.personForm = this.createForm2();
  }
  showList() {
    return this.showListForm.emit('list');
  }
  showDetail() {
    return this.showListForm.emit('detail');
  }

  mostrarDiv() {
this.showDiv = true;
  }

/* createForm() {
     return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', Validators.required],
      documentNumber: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', Validators.required, Validators.pattern(this.emailPattern), Validators.minLength(4)],
      address: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(200)]],
      telephone: ['', [Validators.required, Validators.minLength(4)]],
      available:['', ],
      gender: ['',[Validators.required] ]
    }); 
  }*/

  createForm2(): FormGroup {
    return new FormGroup({
      name: new FormControl(this.person.name, [Validators.required, Validators.minLength(4)]),
      lastName: new FormControl(this.person.lastName, [Validators.required]),
      documentNumber: new FormControl(this.person.documentNumber, [Validators.required]),
      email: new FormControl(this.person.email, [Validators.required, Validators.pattern(this.emailPattern), Validators.minLength(4)]),
      address: new FormControl(this.person.address, [Validators.required, Validators.minLength(4), Validators.maxLength(200)]),
      telephone: new FormControl(this.person.telephone, [Validators.required, Validators.minLength(4)]),
      available: new FormControl(this.person.available, [Validators.required, ]),
    });
  }

  saveData() {
    if (this.personForm.valid) {
      this.personForm.reset();
      console.log('VALIDO' + this.personForm.value);
    } else {
      console.log('NO VALIDO');
    }
  }

  cancel() {
    console.log('cancelo');
    alert('cancelo');
  }

  onSubmit(): void {
   /*  const form: person = Object.assign({}, this.person); */
    console.warn('Your order has been submitted');
    if (this. personForm.valid) {
      this.submitFormNotification.emit(this.personForm.value);
    }
    // this.personForm.reset();
  }
  submit() {
    if (this.personForm.valid) {
      console.log(this.personForm.value);
    } else {
      this.showErrorAlert('Debe completar todos los campos.')
    }
  }
  showErrorAlert(arg0: string) {
    alert(' Method not implemented.');
  }

  get name(){return this.personForm.get('name')}
  get lastName(){return this.personForm.get('lastName')}
  get documentNumber(){return this.personForm.get('documentNumber')}
  get email(){return this.personForm.get('email')}
  get address(){return this.personForm.get('address')}
  get telephone(){return this.personForm.get('telephone')}
  get available(){return this.personForm.get('available')}

  toggleImage(): void {
    this.showDiv= !this.showDiv;
  }

}
