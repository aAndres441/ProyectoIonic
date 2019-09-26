import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HoursEmployee } from '../../model/hours-employee.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastController, SelectValueAccessor } from '@ionic/angular';
import { Person } from 'src/app/pages/person/model/person.model';

@Component({
  selector: 'app-hours-employee-form',
  templateUrl: './hours-employee-form.component.html',
  styleUrls: ['./hours-employee-form.component.scss']
})
export class HoursEmployeeFormComponent implements OnInit {
  @Input() hoursEmployee : HoursEmployee;
  @Output() showComponent = new EventEmitter<any>();
  @Input() employees = new Array<Person>();

  public hoursEmployeeForm:FormGroup;

  constructor(private fb : FormBuilder, public toastController: ToastController) {
  }

  ngOnInit() {
    if(this.hoursEmployee){
      this.hoursEmployeeForm = this.fb.group({
        id: new FormControl(this.hoursEmployee.id,),
        employeeId: new FormControl(this.hoursEmployee.employeeId,[Validators.required]),
        employeeName: new FormControl(this.hoursEmployee.employeeName, ),
        date: new FormControl(this.hoursEmployee.date, [Validators.required]),
        hoursWorked: new FormControl(this.hoursEmployee.hoursWorked, [Validators.required]),
        amount: new FormControl(this.hoursEmployee.amount, [Validators.required])
      });
      
    }else{
      this.hoursEmployeeForm = this.fb.group({
        id: new FormControl(null,),
        employeeId: new FormControl(null,[Validators.required]),
        employeeName: new FormControl(null, ),
        date: new FormControl(null, [Validators.required]),
        hoursWorked: new FormControl(null, [Validators.required]),
        amount: new FormControl(null, [Validators.required])
      });
      
    }
  }

  onChange($event){
    this.hoursEmployeeForm.value.employeeId = $event.target.value;
  }

  onSubmit(){
    
    let id = this.hoursEmployeeForm.value.employeeId;
    let cli :Person = this.employees.filter(elem => elem.id == id)[0];
    this.hoursEmployeeForm.value.employeeName = cli.name;

    //si es editar
    if(this.hoursEmployeeForm.valid && this.hoursEmployee){
      this.hoursEmployeeForm.value.id = this.hoursEmployee.id;
      
      this.succes();
    }
    //else si es agregar nuevo
    if (this.hoursEmployeeForm.valid){
      return this.showComponent.emit({"page":"add","hoursEmployee":this.hoursEmployeeForm.value});
    }
  }

  showList(){
    this.showComponent.emit({"page":"list"});
  }

  employeeForm(){
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
}
