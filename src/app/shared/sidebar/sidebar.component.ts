import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  title = 'awesome sidebar';
  constructor(private route: Router) { }

  ngOnInit() {
    this.route.events.subscribe(
      elem => {
        console.log('titulo: ')
        console.log(elem + 'tt')
      }
    )
  }

}

