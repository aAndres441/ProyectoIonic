import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Person } from '../../model/person';


@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
})
export class PersonDetailComponent implements OnInit {

  @Output () showComponent =  new EventEmitter <any> ();
  @Input () detailPerson: Person  =  new Person ();

  numero: number;  /* Math.floor(Math.random() * */
 title = 'Details';
 
  constructor() { }

  ngOnInit() {}

  showPage() {
    return  this.showComponent. emit ({ page : ' list ' });
  }

  showForm(p: Person) {
    if (!p) { p = new Person(); }
    return this.showComponent.emit({ page: 'form', Person: p });
  } 

  showDetail(p: Person) {
    return this.showComponent.emit({ page: 'detail', Person: p });
  }

  edit(p: Person) {
    return this.showComponent.emit({page: 'form', Person: p});
  }
 
  delete(p: Person){
   
    return this.showComponent.emit({page: 'form', Person: p});
  }


}
