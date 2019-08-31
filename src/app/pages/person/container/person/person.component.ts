
import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Router } from '@angular/router';
import { Person } from '../../model/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  persons: Person[];
  detailPerson: Person = null; /* new Person(); */
  per: Person = null;
  showComponent: string = 'list';

  /* para probar*/
  public misPersons: Person[] = [];

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.getPersons();
  }
  getPersons(): void {
    this.personService.getPersons().subscribe(
      (data) => {
        this.persons = data;
      }
    );
  }

  showPage(obj: any) {
    let per;
    let showAction = obj.page;
    switch (showAction) {
      case "detail": {
        this.showComponent = "detail";
        this.detailPerson = obj.person;
        break;
      }
      case "list": {
        this.showComponent = "list";
        break;
      }
      case "form": {
        this.showComponent = "form";
        if (obj.person) {
          this.per = obj.person;
        } else {
          this.per = null;
        }
        break;
      }
      case "add": {
        this.addPerson(obj.person);
        break;
      }

      case "delete": {
        console.log("DELETE");
        /* per = obj.person;
        if (per) {
          this.deletePerson(per);
        } */
        break;
      }
      default: {
        this.showComponent = "list";
        break;
      }
    }
  }

  addPerson(per: Person) {
    this.personoService.addPerson(per).subscribe(
      (data) => {
        console.log("Persona agregado!")
        this.getPersons();
        this.showComponent = "list";
      }, (error) => {
        console.log('ERROR addPerson:');
        console.log(error);
        this.showComponent = "form";
      }
    );
  }

  deletePerson(per: Person) {
    this.personoService.deletePerson(per).subscribe(
      (data) => {
        console.log("Persona borrada!")
        this.getPersons();
        this.showComponent = "list";
      }, (error) => {
        console.log('ERROR deletePerson:');
        console.log(error);
        this.showComponent = "list";
      }
    );
  }
}
