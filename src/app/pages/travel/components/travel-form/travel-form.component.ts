import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Travel } from '../../model/travel.model';
import { Person } from 'src/app/pages/person/model/person.model';
import { Charter } from 'src/app/pages/charter/model/charter';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.scss'],
})

export class TravelFormComponent implements OnInit {

  @Input() travel : Travel;
  @Output() showComponent = new EventEmitter<any>();
  @Input() travelers = new Array<Person>();
  @Input() charters = new Array<Charter>();

  showCharter : string = 'form';

  public travelForm:FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    if(this.travel && this.travel.id){
      this.showCharter = 'list';
      this.travelForm = this.fb.group({
        id : new FormControl(this.travel.id),
        travelerId : new FormControl(this.travel.travelerId,[Validators.required]),
        travelerName : new FormControl(this.travel.travelerName,),
        price : new FormControl(this.travel.price,[Validators.required]),
        description : new FormControl(this.travel.description,),
        charters : new FormControl(this.charters,)
      });
    }else {
      this.showCharter = 'form';
      this.travelForm = this.fb.group({
        id : new FormControl(this.travel.id),
        travelerId : new FormControl(this.travel.travelerId,[Validators.required]),
        travelerName : new FormControl(this.travel.travelerName,),
        price : new FormControl(this.travel.price,),
        description : new FormControl(this.travel.description, ),
        charters : new FormControl(this.charters,)
      });
    }
    
  }
 
  onSubmit(){

    let id = this.travelForm.value.travelerId;
    let traveler :Person = this.travelers.filter(elem => elem.id == id)[0];
    this.travelForm.value.travelerName = traveler.name;
    let totalPrice = 0;
    this.charters.forEach(data => {
      totalPrice += data.price;
    })
    this.travelForm.value.price = totalPrice;
    //si es editar
    if(this.travelForm.valid && this.travel){
      this.travelForm.value.id = this.travel.id;
    }
    //else si es agregar nuevo
    if (this.travelForm.valid && this.charters.length > 0){
      this.travelForm.value.charters = this.charters;
      return this.showComponent.emit({"page":"add","travel":this.travelForm.value});
      //return this.showComponent.emit({"page":"add","travel":this.travelForm.value,"charters":this.charters});
    }
  }

  showList(){
    this.showComponent.emit({"page":"list"});
  }

  actionCharter(event:any){
    switch(event.action){
      case'add':{
        this.charters.push(event.order);
        break
      }case'delete':{
        let index = this.charters.indexOf(event.order);
        this.charters.splice(index,1);
        break
      }case'edit':{
        let index = this.charters.indexOf(event.order);
        this.charters.splice(index,1);
        this.charters.push(event.order);
        break
      }
    }
    
  }
  onChange($event){
    this.travelForm.value.travelerId = $event.target.value;
  }

  


}
