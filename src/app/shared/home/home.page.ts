import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = 'BARRACA CARDONA';
  ver : false;

  constructor(private router: Router) { }

  OnInit() {}

  back(): void {
    this.router.navigate(['/']);
  }
  ocultar(): boolean{
    
return !this.ver;
}

}
