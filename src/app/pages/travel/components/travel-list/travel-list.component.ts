import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Travel } from '../../model/travel.model';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss'],
})
export class TravelListComponent implements OnInit {
  @Input() travels : Array<Travel>;
  @Output() showComponent = new EventEmitter<any>();
  travelSelected : number = 0;
  constructor() {  }

  ngOnInit() {
   
  }
  
  showDetail(p:Travel){
    return this.showComponent.emit({"page":"detail","travel":p});
  }

  showForm(p:Travel){
    if(!p) {
      p = {
        id : null,
        travelerId : null,
        travelerName:null,
        price : null,
        description : null,
        tmstmp: null
      }
    }
    return this.showComponent.emit({"page":"form","travel":p});
  }

  setTravel(i:number){
    this.travelSelected = i
  }

  deleteTravel(i:number){
    let p = this.travels[i];
    return this.showComponent.emit({"page":"delete","travel":p});
  }
}
