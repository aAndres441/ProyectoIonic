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

  constructor() { }

  ngOnInit() {}

}
