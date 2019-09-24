import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExtraExpense } from '../../model/extra-expense.model';

@Component({
  selector: 'app-extra-expenses-list',
  templateUrl: './extra-expenses-list.component.html',
  styleUrls: ['./extra-expenses-list.component.scss'],
})
export class ExtraExpensesListComponent implements OnInit {
  @Input() extraExpenses = new Array<ExtraExpense>();
  @Output() showComponent = new EventEmitter<any>();
  extraExpenseSelected : number = 0;
  constructor() {  }

  ngOnInit() {
   
  }
  
  showDetail(p:ExtraExpense){
    return this.showComponent.emit({"page":"detail","extraExpense":p});
  }

  showForm(p:ExtraExpense){
    if(!p) {
      p = {
        id:null,
        description:null,
        price:null,
        tmstmp:null
      }
    }
    return this.showComponent.emit({"page":"form","extraExpense":p});
  }

  setExtraExpense(i:number){
    this.extraExpenseSelected = i
  }

  deleteExtraExpense(i:number){
    let p = this.extraExpenses[i];
    return this.showComponent.emit({"page":"delete","extraExpense":p});
  }
}
