import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person.model';
import { PersonService } from 'src/app/services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  persons : Person[];
  detailPerson : Person = null;
  person : Person = null;
  showComponent:string = '';
  
  constructor( private personService: PersonService, private router: Router ) { }

  
  ngOnInit(): void {
    this.getPersons();
  }

  getPersons():void{
    this.personService.getPersons().subscribe(
      (data) => {
        this.persons = data
        this.showComponent = "list";
      }
    );
  }


  showPage(obj:any) {
    let person;
    let showAction = obj.page;
    switch(showAction) { 
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
        if(obj.person){
          this.person = obj.person;
        }else {
          this.person = null;
        }
        break; 
      }
      case "add": { 
        this.addPerson(obj.person);
        break; 
      }
      case "delete": { 
        person = obj.person;
        if(person){
          this.deletePerson(person);
        }
        break; 
      }   
      default: { 
        this.showComponent = "list";
        break; 
      } 
   } 
  } 

  addPerson(person:Person){
    this.personService.addPerson(person).subscribe(
      (data) => {
        console.log("Persona agregado!")
        this.personService.getId().subscribe(
          (data:any) => {
            person.id = data.id;
            this.personService.addPersonType(person).subscribe();
          }
        )
        this.getPersons();
      },(error) => {
        console.log('ERROR addPerson:');
        console.log(error);
        this.showComponent = "form";
      }
    );
  }

  deletePerson(person:Person){
    console.log(person)
    this.personService.deletePersonType(person).subscribe(
      (data) => {
        console.log("Persona tipo borrada!")
        this.personService.deletePerson(person).subscribe(
          (data) => {
            console.log("Persona tipo borrada!")
            this.getPersons();
          },(error) => {
            console.log('ERROR deletePerson:');
            console.log(error);
            this.showComponent = "list";
          }
        );
      },(error) => {
        console.log('ERROR deletePerson:');
        console.log(error);
        this.showComponent = "list";
      }
    );
  }


}
