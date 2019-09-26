import { Component, OnInit } from '@angular/core';
import { SaleService } from 'src/app/services/sale.service';
import { Router } from '@angular/router';
import { Person } from 'src/app/pages/person/model/person.model';
import { PersonService } from 'src/app/services/person.service';
import { Sale } from 'src/app/pages/sale/model/sale.model';
import { Charter } from '../../model/charter.model';
import { CharterService } from 'src/app/services/charter.service';

@Component({
  selector: 'app-charter',
  templateUrl: './charter.component.html',
  styleUrls: ['./charter.component.scss'],
})
export class CharterComponent implements OnInit {
  sales : Array<Sale> = new Array<Sale>();
  sale : Sale = null;
  charter : Charter = null;
  travelers = new Array<Person>();
  unSuscribe : any;
  showComponent:string = '';

  constructor(private charterService: CharterService,
    private saleService: SaleService, 
    private travelerService :PersonService) { }

  ngOnInit(): void {
    this.getSalesWithoutCharters();
  }
  
  getSalesWithoutCharters():void{
    this.unSuscribe = this.charterService.getSalesWithoutCharter().subscribe(
      (data:Array<Sale>) => {
        this.sales = data;
        this.showComponent = 'form'
      }
    );
  }

  getTravelers(){
    this.unSuscribe = this.travelerService.getPersonsType("Travelere").subscribe(
      (data:Array<Person>) => {
        this.travelers = data
      } 
    );
  }

  showPage(obj:any) {
    let charter;
    let showAction = obj.page;
    switch(showAction) { 
      case "form": { 
        this.charter = obj.charter;
        this.getTravelers();
        break; 
      }
      case "add": { 
        this.addCharter(obj.charter);
        break; 
      }  
      default: { 
        this.showComponent = "";
        break; 
      } 
   } 
  } 

  addCharter(charter:any){
    this.unSuscribe = this.charterService.addCharter(charter).subscribe(
      () => {
        this.charterService.getId().subscribe( (data:any) => {
          let id = data.id;
          this.sale.charterId = id;
          this.unSuscribe = this.saleService.addSale(this.sale).subscribe();
        });
        this.getSalesWithoutCharters();
      },(error) => {
      }
    );
  }
}
