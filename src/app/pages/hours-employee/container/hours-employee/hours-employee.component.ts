import { PersonService } from 'src/app/services/person.service';
import { Component, OnInit } from '@angular/core';
import { HoursEmployee } from '../../model/hours-employee.model';
import { HoursEmployeeService } from 'src/app/services/hours-employee.service';
import { Router } from '@angular/router';
import { Person } from 'src/app/pages/person/model/person.model';

@Component({
  selector: 'app-hours-employee',
  templateUrl: './hours-employee.component.html',
  styleUrls: ['./hours-employee.component.scss'],
})
export class HoursEmployeeComponent implements OnInit {
  hoursEmployees : HoursEmployee[];
  detailHoursEmployee : HoursEmployee = null;
  prod : HoursEmployee = null;
  showComponent:string = '';
  employees = new Array<Person>();

  constructor( private hoursEmployeeService: HoursEmployeeService,private employeeService:PersonService, private router: Router ) { }

  
  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getPersonsType("Empleado").subscribe(
      data => {
        this.employees = data
        this.getHoursEmployees();
      }
    )
  }

  getHoursEmployees():void{
    this.hoursEmployeeService.getHoursEmployees().subscribe(
      (data) => {
        this.hoursEmployees = data
        this.showComponent = 'list'
      }
    );
  }


  showPage(obj:any) {
    let prod;
    let showAction = obj.page;
    switch(showAction) { 
      case "detail": { 
        this.showComponent = "detail";
        this.detailHoursEmployee = obj.hoursEmployee; 
        break; 
      } 
      case "list": { 
        this.showComponent = "list";
        break; 
      } 
      case "form": { 
        this.showComponent = "form";
        if(obj.hoursEmployee){
          this.prod = obj.hoursEmployee;
        }else {
          this.prod = null;
        }
        break; 
      }
      case "add": { 
        this.addHoursEmployee(obj.hoursEmployee);
        break; 
      }
      case "delete": { 
        prod = obj.hoursEmployee;
        if(prod){
          this.deleteHoursEmployee(prod);
        }
        break; 
      }   
      default: { 
        this.showComponent = "list";
        break; 
      } 
   } 
  } 

  addHoursEmployee(prod:HoursEmployee){
    this.hoursEmployeeService.addHoursEmployee(prod).subscribe(
      (data) => {
        console.log("HoursEmployeeo agregado!")
        this.getHoursEmployees();
        this.showComponent = "list";
      },(error) => {
        console.log('ERROR addHoursEmployee:');
        console.log(error);
        this.showComponent = "form";
      }
    );
  }

  deleteHoursEmployee(prod:HoursEmployee){
    this.hoursEmployeeService.deleteHoursEmployee(prod).subscribe(
      (data) => {
        console.log("HoursEmployeeo borrado!")
        this.getHoursEmployees();
        this.showComponent = "list";
      },(error) => {
        console.log('ERROR deleteHoursEmployee:');
        console.log(error);
        this.showComponent = "list";
      }
    );
  }
}
