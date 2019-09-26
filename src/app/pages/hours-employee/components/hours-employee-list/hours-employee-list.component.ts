import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { HoursEmployee } from '../../model/hours-employee.model';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-hours-employee-list',
  templateUrl: './hours-employee-list.component.html',
  styleUrls: ['./hours-employee-list.component.scss'],
})
export class HoursEmployeeListComponent implements OnInit {
  /* @Input() hoursEmployees = new Array<HoursEmployee>(); */
  @Input() hoursEmployees : HoursEmployee[];
  @Output() showComponent = new EventEmitter<any>();
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll; 
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
  DownloadtoPDF(){ 
    return this.showComponent.emit({ 'page': 'print'});
  }
  toggleInfiniteScroll() {
    // this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  doRefresh(event) {
    console.log('Begin async operation', event);

    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 1000);
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Carga siguientes...');

      if (this.hoursEmployees.length > 1) {
        this.infiniteScroll.disabled = true;
        return;
      }
    }, 1000);
  }
}
