import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HoursEmployee } from '../../model/hours-employee.model';

@Component({
  selector: 'app-hours-employee-list',
  templateUrl: './hours-employee-list.component.html',
  styleUrls: ['./hours-employee-list.component.scss'],
})
export class HoursEmployeeListComponent implements OnInit {
  @Input() hoursEmployees = new Array<HoursEmployee>();
  @Output() showComponent = new EventEmitter<any>();
  hoursEmployeeSelected : number = 0;
  constructor() {  }

  ngOnInit() {
   
  }
  
  showDetail(p:HoursEmployee){
    return this.showComponent.emit({"page":"detail","hoursEmployee":p});
  }

  showForm(p:HoursEmployee){
    if(!p) {
      p = {
        id:null,
        employeeId:null,
        employeeName:null,
        date:null,
        hoursWorked:null,
        amount:null
      }
    }
    return this.showComponent.emit({"page":"form","hoursEmployee":p});
  }

  setHoursEmployee(i:number){
    this.hoursEmployeeSelected = i
  }

  deleteHoursEmployee(i:number){
    let p = this.hoursEmployees[i];
    return this.showComponent.emit({"page":"delete","hoursEmployee":p});
  }
}
