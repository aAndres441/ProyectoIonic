import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss'],
})
export class TravelListComponent implements OnInit {
  @Input() sales : Array<Sale>;
  @Output() showComponent = new EventEmitter<any>();
  saleSelected : number = 0;
  constructor() {  }

  ngOnInit() {
   
  }
  
  showDetail(p:Sale){
    return this.showComponent.emit({"page":"detail","sale":p});
  }

  showForm(p:Sale){
    if(!p) {
      p = {
        id:null,
        clientId:null,
        clientName:null,
        description:null,
        totalAmount:null,
        tmstmp:null
      }
    }
    return this.showComponent.emit({"page":"form","sale":p});
  }

  setSale(i:number){
    this.saleSelected = i
  }

  deleteSale(i:number){
    let p = this.sales[i];
    return this.showComponent.emit({"page":"delete","sale":p});
  }
}
