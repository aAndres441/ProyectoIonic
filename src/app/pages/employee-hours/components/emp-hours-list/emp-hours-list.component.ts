import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Person} from '../../../person/model/person.model';
@Component({
  selector: 'app-emp-hours-list',
  templateUrl: './emp-hours-list.component.html',
  styleUrls: ['./emp-hours-list.component.scss'],
})
export class EmpHoursListComponent implements OnInit {

  public hoursForm: FormGroup;
  public error: string;
  public personSelect: string;
  public empls: Person[]; 
  employeeds: any[];
  employeedsFilter: any[];
  user: string;
  public horasDia: {
    cantHora: number;
    fecha: Date;
  };

   public emp: {
    id: number;
    first: string;
    last: string;
    disponible: string;
  };

  public showDiv = false;
  @ViewChild('table', { static: true }) table: ElementRef;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createEmps();
    this.hoursForm = this.createForm();
  }

  list(): void {
    this.showDiv = !this.showDiv;
  }

  assign(valor1: string, valor2: string, valor3: Date, valor4: Date) {
    this.user = valor1;
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.employeeds.length; index++) {
      if (this.employeeds[index].first === valor1) {
        this.employeeds[index].horas = valor2;
      }
      this.list(); /* return; */
    }
  }


  valor(dato: string) {
    /*  if (isNaN(dato) || dato < 10) {
       alert('Invalid product Id')
     } */

    if (!dato) {
      this.error = 'ingrese algo';
      alert(this.error);
    } else {
      this.error = '';
      this.personSelect = dato;
      alert(this.personSelect);

    }
  }
  
  
  createForm(): FormGroup {
    return this.fb.group({
       /* id: new FormControl(this.emp.id), */
       first: new FormControl(this.emp.first, [Validators.required, Validators.minLength(4)]),
       last: new FormControl(this.emp.last, [Validators.required]),
      disable: new FormControl(this.emp.disponible, [Validators.required, Validators.minLength(4), Validators.maxLength(200)])
   
      /* Usamos la formBuilder.groupfunción para crear nuestro FormGroup al proporcionar 
      un objeto que contiene cada uno de nuestros FormControls . 
      También debemos establecer la formGrouppropiedad en el padre
       <form>para que tenga el mismo nombre que nuestro grupo FormBuilder */
    });
  }
 
getListEpls(){
return this.employeeds;
}
  createEmps() {
    this.employeeds = [
      {
        id: 1,
        first: 'Alice',
        last: 'Smith',
        disponible: true,
        horas: 0,
      },
      {
        id: 2,
        first: 'Bob',
        last: 'Davis',
        disponible: true,
        horas: 0,
      },
      {
        id: 3,
        first: 'Charlie',
        last: 'Rosenburg',
        disponible: true,
        horas: 0,
      },
      {
        id: 4,
        first: 'Ana',
        last: 'Frank',
        disponible: true,
        horas: 0,
      },
      {
        id: 5,
        first: 'Luca',
        last: 'Sugo',
        disponible: true,
        horas: 0,
      },
      {
        id: 6,
        first: 'Pepe',
        last: 'Paradise',
        disponible: false,
        horas: 0,
      },
      {
        id: 7,
        first: 'Shell',
        last: 'winner',
        disponible: false,
        horas: 0,
      }
    ];
  }
  insertEnListaFilter2() {
    const otra: any[] = [];
    // tslint:disable-next-line: whitespace
    for (let dato = 1; dato <= this.employeeds.length; dato++) {

      if (!this.employeeds[dato].disponible) {
        /*  otra.push(this.employeeds[dato]); */
        otra.push(this.employeeds[dato].first);

        alert('si' + dato + '--' + otra.length + '---' + this.employeeds[dato].first);
      }
      this.employeedsFilter = otra;
      console.log("filtro" + this.employeedsFilter);

    }
    console.log(this.employeedsFilter.length);
    console.log("this.employeedsFilter.length")
  }


  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

}
