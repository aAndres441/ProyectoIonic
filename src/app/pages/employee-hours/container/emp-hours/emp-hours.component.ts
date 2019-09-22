import { Component, OnInit } from '@angular/core';
import { PersonService } from './../../../../services/person.service';
import {EmployeeHoursService} from '../../../../services/employee-hours.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { Person } from 'src/app/pages/person/model/person.model';
import { EmployeeHours } from 'src/app/pages/employee-hours/model/employee-hours';

@Component({
  selector: 'app-emp-hours',
  templateUrl: './emp-hours.component.html',
  styleUrls: ['./emp-hours.component.scss'],
})
export class EmpHoursComponent implements OnInit {producemts: EmployeeHours[];

  empHours: EmployeeHours[];
  public detailEmpHours: EmployeeHours[] = [];
  empHour: EmployeeHours = null;
  showComponent: string = 'list';

  constructor(private employeeHoursService: EmployeeHoursService) { }

  ngOnInit(): void {
    /* this.getEmpHour();  */
  }
  
  loadMisProducts() {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      // event.complete();
    }, 1000); 
  }

  getEmpHour(): void {
    this.employeeHoursService.getHoursPersons().subscribe(
      (data) => {
        this.empHours = data;
        this.showComponent = 'list';
      }
    );
  }

  showPage(obj: any) {
    let empHour;
    const showAction = obj.page;
    switch (showAction) {

         /* PRINT */          
      case "print": {
        this.showComponent = "print";
        break;
      }
      
      case "detail": {
        this.showComponent = "detail";
        this.empHours = obj.empHou;
        break;
      }
      case "list": {
        this.showComponent = "list";
        break;
      }
      case "form": {
        this.showComponent = "form";
        if (obj.product) {
          this.empHour = obj.empHou;
        } else {
          this.empHour = null;
        }
        break;
      }
      case "add": {
        this.addEmpHours(obj.empHou);
        break;
      }
      
      case "delete": {
        empHour = obj.empHou;
        if (empHour) {
          this.deleteEmpHours(empHour);
        }
        break;
      }
      default: {
        this.showComponent = "list";
        break;
      }
    }
  }
  

  addEmpHours(empHour: EmployeeHours) {
    this.employeeHoursService.addEmpHours(empHour).subscribe(
      (data) => {
        this.getEmpHour();
        this.showComponent = "list";
      }, (error) => {
        console.log('ERROR add:');
        console.log(error);
        this.showComponent = "form";
      }
    );
  }

  deleteEmpHours(empHour: EmployeeHours) {
    this.employeeHoursService.deleteEmpHours(empHour).subscribe(
      (data) => {
        this.getEmpHour();
        this.showComponent = "list";
      }, (error) => {
        console.log('ERROR delete:');
        console.log(error);
        this.showComponent = "list";
      }
    );
  }
}
