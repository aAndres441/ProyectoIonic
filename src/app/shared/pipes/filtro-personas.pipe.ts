import { Pipe, PipeTransform } from '@angular/core';
import { Person } from 'src/app/pages/person/model/person.model';


@Pipe({
  name: 'filtroPersonas'
})
export class FiltroPersonasPipe implements PipeTransform {

  transform(persons: Person[], dato: string): Person[] {
    if ( !persons) { return []; }
    if ( dato.length === 0 ) { return persons; }
    dato = dato.toLocaleLowerCase();
    return persons.filter( ( unaPersona ) => {
      return unaPersona.name.toLocaleLowerCase().includes(dato) || unaPersona.lastName.toLocaleLowerCase().includes(dato);
    });
  }

}
