import { Component, OnInit } from '@angular/core';
import { Travel } from '../../model/travel.model';
import { Person } from 'src/app/pages/person/model/person.model';
import { TravelService } from 'src/app/services/travel.service';
import { PersonService } from 'src/app/services/person.service';
import { Charter } from 'src/app/pages/charter/model/charter';
import { CharterService } from 'src/app/services/charter.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
})
export class TravelComponent implements OnInit {
  travels : Array<Travel> = new Array<Travel>();
  travel : Travel = null;
  detailTravel : Travel;
  
  showComponent:string = 'list';
  travelers = new Array<Person>();
  unSuscribe : any;
  
  constructor( private travelService: TravelService, 
    private travelerService :PersonService,
    private charterService:CharterService) { }

  ngOnInit(): void {
    this.getTravels();
  }
  
  getTravels():void{
    this.unSuscribe = this.travelService.getTravels().subscribe(
      (data:Array<Travel>) => {
        this.travels = data;
      }
    );
  }

  getTravelers(){
    this.unSuscribe = this.travelerService.getPersons().subscribe(
      (data:Array<Person>) => {
        this.travelers = data
        this.showComponent = "form";
      } 
    );
  }


  showPage(obj:any) {
    
    let travel;
    let showAction = obj.page;
    switch(showAction) { 
      case "detail": { 
        this.showComponent = "detail";
        this.detailTravel = obj.travel; 
        break; 
      } 
      case "list": { 
        this.showComponent = "list";
        break; 
      } 
      case "form": { 
        console.log(obj)
        this.travel = obj.travel;
       
        this.getTravelers();
        break; 
      }
      case "add": { 
        this.addTravel(obj.travel);
        break; 
      }
      case "delete": { 
        travel = obj.travel;
        if(travel){
          this.deleteTravel(travel);
        }
        break; 
      }   
      default: { 
        this.showComponent = "list";
        break; 
      } 
   } 
  } 

  addTravel(travel:any){
  
    this.unSuscribe = this.travelService.addTravel(travel).subscribe(
      () => {
        this.travelService.getId().subscribe( (data:any) => {
          let id = data.id;
          travel.charters.forEach(elem => {
            let charter : Charter = {
              id : null,
              travelId : elem.travelId,
              sourceAddress : elem.sourceAddress,
              destinationAddress : elem.destinationAddress,
              price: elem.price,
              description : elem.description,
              tmstmp: elem.tmstmp
            }
            this.charterService.addCharter(charter).subscribe();
          })
        });
        this.getTravels();
        this.showComponent = "list";
      },(error) => {
        this.showComponent = "form";
      }
    );
  }

  deleteTravel(travel:Travel){
    this.travelService.deleteTravel(travel).subscribe(
      (data) => {
        this.getTravels();
        this.showComponent = "list";
      },(error) => {
        this.showComponent = "list";
      }
    );
  }

}
