import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HoursEmployee } from '../../model/hours-employee.model';


@Component({
  selector: 'app-hours-employee-detail',
  templateUrl: './hours-employee-detail.component.html',
  styleUrls: ['./hours-employee-detail.component.scss'],
})
export class HoursEmployeeDetailComponent implements OnInit {

  @Output() showComponent = new EventEmitter<any>();
  @Input() detailHoursEmployee : HoursEmployee;
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = this.detailHoursEmployee.employeeName;    
  }

  showPage(){
    return this.showComponent.emit({"page":"list"});
  }
  showList(){
    this.showComponent.emit({"page":"list"});
  }

}
