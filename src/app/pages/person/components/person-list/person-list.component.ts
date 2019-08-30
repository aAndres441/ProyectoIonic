import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Person } from '../../model/person.model';
import { IonInfiniteScroll } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit {

  @Input() persons : Array<Person>;
  @Output() showComponent = new EventEmitter<any>();
  @ViewChild( IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll; // para usar el componente
  personselected : number = 0;
  title = 'Persons';
  public lstPeersons:any[]=Array(20);

  constructor() {  }

  ngOnInit() {
   console.log(this.lstPeersons.values);
  }
  
  showDetail(p:Person){
    return this.showComponent.emit({"page":"detail","person":p});
  }

  showForm(p:Person){
    if(!p) {
      p = null;/* new Person(); */
    }
    return this.showComponent.emit({"page":"form","person":p});
  }

  setPerson(i:number){
    this.personselected = i
  }

  deletePerson(i:number){
    let p = this.persons[i];
    return this.showComponent.emit({"page":"delete","person":p});
  }
  /* refresh */
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

      if (this.persons.length > 5) {
        this.infiniteScroll.disabled = true;
        return;
      }
    }, 1000);
  }
}
