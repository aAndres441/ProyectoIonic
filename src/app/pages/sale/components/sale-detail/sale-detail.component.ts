import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Sale } from '../../model/sale.model';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.scss'],
})
export class SaleDetailComponent implements OnInit {
  @Input() detailSale : Sale;
  @Output() showComponent = new EventEmitter<any>();
  showDetail = 'list'
  constructor() { }

  ngOnInit() {}

  showPage(){
    return this.showComponent.emit({"page":"list"});
  }
  showList(){
    this.showComponent.emit({"page":"list"});
  }

}
