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
        this.getTravelers();
        this.showComponent = 'form'
      }
    );
  }

  getTravelers(){
    this.unSuscribe = this.travelerService.getPersonsType("Fletero").subscribe(
      (data:Array<Person>) => {
        console.log(data)
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
        this.addCharter(obj.charter,obj.sale);
        break; 
      }  
      default: { 
        this.showComponent = "";
        break; 
      } 
   } 
  } 

  addCharter(charter:any,sale:Sale){
    this.unSuscribe = this.charterService.addCharter(charter).subscribe(
      () => {
        this.unSuscribe = this.charterService.getId().subscribe( (data:any) => {
          console.log('id de flete')
          console.log(data)
          let id = data.id;
          sale.charterId = id;
          console.log('venta a editar')
          console.log(data)
          this.unSuscribe = this.saleService.addSale(sale).subscribe(
            () => this.getSalesWithoutCharters()
          );
        });
      },(error) => {
      }
    );
  }
}
