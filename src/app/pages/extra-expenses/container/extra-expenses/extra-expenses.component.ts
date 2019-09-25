import { ExtraExpense } from '../../model/extra-expense.model';
import { Component, OnInit } from '@angular/core';
import { ExtraExpenseService } from 'src/app/services/extra-expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extra-expenses',
  templateUrl: './extra-expenses.component.html',
  styleUrls: ['./extra-expenses.component.scss'],
})
export class ExtraExpensesComponent implements OnInit {
  extraExpenses : ExtraExpense[];
  detailExtraExpense : ExtraExpense = null;
  extExp : ExtraExpense = null;
  showComponent:string = 'list';
  
  constructor( private extraExpenseService: ExtraExpenseService, private router: Router ) { }

  
  ngOnInit(): void {
    this.getExtraExpenses();
  }

  getExtraExpenses():void{
    this.extraExpenseService.getExtraExpenses().subscribe(
      (data) => {
        this.extraExpenses = data
      }
    );
  }


  showPage(obj:any) {
    let extExp;
    let showAction = obj.page;
    switch(showAction) { 
      case "detail": { 
        this.showComponent = "detail";
        this.detailExtraExpense = obj.extraExpense; 
        break; 
      } 
      case "list": { 
        this.showComponent = "list";
        break; 
      } 
      case "form": { 
        this.showComponent = "form";
        if(obj.extraExpense){
          this.extExp = obj.extraExpense;
        }else {
          this.extExp = null;
        }
        break; 
      }
      case "add": { 
        this.addExtraExpense(obj.extraExpense);
        break; 
      }
      case "delete": { 
        extExp = obj.extraExpense;
        if(extExp){
          this.deleteExtraExpense(extExp);
        }
        break; 
      }   
      default: { 
        this.showComponent = "list";
        break; 
      } 
   } 
  } 

  addExtraExpense(extExp:ExtraExpense){
    this.extraExpenseService.addExtraExpense(extExp).subscribe(
      (data) => {
        console.log("Gasto extra agregado!")
        this.getExtraExpenses();
        this.showComponent = "list";
      },(error) => {
        console.log('ERROR addExtraExpense:');
        console.log(error);
        this.showComponent = "form";
      }
    );
  }

  deleteExtraExpense(extExp:ExtraExpense){
    this.extraExpenseService.deleteExtraExpense(extExp).subscribe(
      (data) => {
        console.log("Gasto extra borrado!")
        this.getExtraExpenses();
        this.showComponent = "list";
      },(error) => {
        console.log('ERROR deleteExtraExpense:');
        console.log(error);
        this.showComponent = "list";
      }
    );
  }
}
