import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appFondoMarron]'
})
export class FondoMarronDirective {
  //llama al componente importado
  constructor(element : ElementRef) { 
    element.nativeElement.style.backgroundColor = 'green';
  }
}
