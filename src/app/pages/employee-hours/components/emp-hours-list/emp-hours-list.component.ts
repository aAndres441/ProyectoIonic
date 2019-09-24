import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ToastController, SelectValueAccessor } from '@ionic/angular';
import { Person } from '../../../person/model/person.model';
@Component({
  selector: 'app-emp-hours-list',
  templateUrl: './emp-hours-list.component.html',
  styleUrls: ['./emp-hours-list.component.scss'],
})
export class EmpHoursListComponent implements OnInit {

  public name: string = 'fenix';
  public age: number = 77;
  public hoursForm: FormGroup;
  public showDiv = false;
  public hidden = false;
  public message = '';
  public personSelect: string;
  public empls: Person[];
  employeeds: any[];
  employeedsFilter: any[];
  @Output() showComponent = new EventEmitter<any>();
  @ViewChild('errorDiv', { static: true }) errorDiv: ElementRef; 
  @ViewChild('reporteDiv', { static: true }) reporteDiv: ElementRef;
  public horasDia: {
    cantHora: number;
    fecha: Date;
  };

  public emp: {
    id: number;
    first: string;
    last: string;
    disponible: string;
    horas: number;
  };

  constructor(private fb: FormBuilder, public toastController: ToastController) { }

  ngOnInit() {
    this.createEmps();
    this.hoursForm = this.createForm();
  }

  list(): void {
    this.showDiv = !this.showDiv;
  }


  assign(selEmpl, hourSelect, hourFin, hourIni) {
    if (hourFin.value >= hourIni.value && hourSelect.value > 0 && selEmpl.value !== '') {
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < this.employeeds.length; index++) {
        if (this.employeeds[index].first === selEmpl.value) {
          this.employeeds[index].horas = hourSelect.value;
          this.employeeds[index].fechaI = hourIni.value;
          this.employeeds[index].fechaF = hourFin.value;
          this.reset(selEmpl, hourSelect, hourFin, hourIni);
        }
        this.succes();
      }
    } else {
      this.presentToast();
    }
  }

  reset(dato1, dato2, dato3, dato4) {
    /*  dato1.value = '';
     dato2.value = ''; */
    dato3.value = '';
    dato4.value = '';
    dato2.focus();
  }

  deleteHoras(selEmpl) {
    if (selEmpl.value !== '') {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.employeeds.length; index++) {
      if (this.employeeds[index].first === selEmpl.value) {
        this.employeeds[index].horas = 0;
      }
      this.succes();
    }
  } else {
    this.presentToast();
  }
}
  createForm(): FormGroup {
    return this.fb.group({
      /* id: new FormControl(this.emp.id), */
      first: new FormControl(this.emp.first, [Validators.required]),
      last: new FormControl(this.emp.last, [Validators.required]),
      disponible: new FormControl(this.emp.disponible, [Validators.required, Validators.minLength(4), Validators.maxLength(200)]),
      horas: new FormControl(this.emp.horas, [Validators.required])
    });
  }

  getListEpls() {
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
        fechaI: new Date(),
        fechaF: new Date()
      },
      {
        id: 2,
        first: 'Bob',
        last: 'Davis',
        disponible: true,
        horas: 0,
        fechaI: new Date(),
        fechaF: new Date()
      },
      {
        id: 3,
        first: 'Charlie',
        last: 'Rosenburg',
        disponible: true,
        horas: 0,
        fechaI: new Date(),
        fechaF: new Date()
      },
      {
        id: 4,
        first: 'Ana',
        last: 'Frank',
        disponible: true,
        horas: 0,
        fechaI: new Date(),
        fechaF: new Date()
      },
      {
        id: 5,
        first: 'Luca',
        last: 'Sugo',
        disponible: true,
        horas: 0,
        fechaI: new Date(),
        fechaF: new Date()
      },
      {
        id: 6,
        first: 'Pepe',
        last: 'Paradise',
        disponible: false,
        horas: 0,
        fechaI: new Date(),
        fechaF: new Date()
      },
      {
        id: 7,
        first: 'Shell',
        last: 'winner',
        disponible: false,
        horas: 0,
        fechaI: new Date(),
        fechaF: new Date()
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Verifique los datos',
      position: 'top',
      color: 'danger',
      duration: 3000
    });
    toast.present();
  }
  async succes(){
    const toast = await this.toastController.create({
      message: 'Cambio exitoso',
      position: 'top',
      color: 'success',
      duration: 3000
    });
    toast.present();
  }
  DownloadtoPDF(){    
    return this.showComponent.emit({ 'page': 'print'});
    /* alert("estos" + this.products.length); */
  }
}
