import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { Person } from '../../model/person.model';
import { FormGroup, FormControl, Validators, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent implements OnInit {
  @Input() person : Person;
  @Output() showComponent = new EventEmitter<any>();
  personTypes = [{"name":"Empleado"},{"name":"Cliente"},{"name":"Fletero"}];

  public personForm:FormGroup;

  constructor(private fb : FormBuilder) { 
  }

  ngOnInit() {
    if(this.person){
      this.personForm = this.fb.group({
        id: new FormControl(this.person.id,),
        name: new FormControl(this.person.name,[Validators.required]),
        lastname: new FormControl(this.person.lastname, [Validators.required]),
        email: new FormControl(this.person.email, [Validators.email]),
        direction: new FormControl(this.person.direction, [Validators.required]),
        cellphone: new FormControl(this.person.cellphone, [Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
        personType: new FormControl("Empleado", [Validators.required])
      });
    }else{
      this.personForm = this.fb.group({
        id: new FormControl(null,),
        name: new FormControl(null,[Validators.required]),
        lastname: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.email]),
        direction: new FormControl(null, [Validators.required]),
        cellphone: new FormControl(null, [Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
        personType: new FormControl("Empleado", [Validators.required])
      });
    }
  }
 
  onSubmit(){
    //si es editar
    if(this.personForm.valid && this.person){
      this.personForm.value.id = this.person.id;
    }
    //else si es agregar nuevo
    if (this.personForm.valid){
      return this.showComponent.emit({"page":"add","person":this.personForm.value});
    }
  }

  showList(){
    this.showComponent.emit({"page":"list"});
  }
  onChange($event){
    this.personForm.value.personType = $event.target.value;
  }
}
