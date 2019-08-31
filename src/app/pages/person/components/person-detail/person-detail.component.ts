import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../model/person.model';
@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
})
export class PersonDetailComponent implements OnInit {
  
  @Output() showComponent = new EventEmitter<any>();
  @Input() detailPerson : Person = null;/* new Person(); */

  title: string = "Ver-OnInit()";

  constructor() { }

  ngOnInit() {
    /* this.title = this.detailPerson.name; */
    
  }

  showPage(){
    return this.showComponent.emit({"page":"list"});
  }
  showList(){
    this.showComponent.emit({"page":"list"});
  }

}

