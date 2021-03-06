import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title = 'BARRACA CARDONA';

  constructor(private router: Router) { }


  ngOnInit() {}

  back(): void {
    /* this.router.navigate(['/']); */
    this.router.navigate(['/layout/products']);
    
  }
}
