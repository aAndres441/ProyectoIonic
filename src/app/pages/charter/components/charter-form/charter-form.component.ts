import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Charter } from '../../model/charter.model';
import { Person } from 'src/app/pages/person/model/person.model';
import { Sale } from 'src/app/pages/sale/model/sale.model';

@Component({
  selector: 'app-charter-form',
  templateUrl: './charter-form.component.html',
  styleUrls: ['./charter-form.component.scss'],
})
export class CharterFormComponent implements OnInit {
  @Input() charter : Charter;
  @Input() sales : Array<Sale>;
  saleSelected : number = -1;
  saleObjSelected : Sale = {
    id:null,
    clientId:null,
    clientName:null,
    charterId:null,
    description:null,
    totalAmount:null,
    tmstmp:null,
  };
  
  @Output() showComponent = new EventEmitter<any>();
  @Input() travelers = new Array<Person>();

  public charterForm:FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    if(this.charter){
      this.charterForm = this.fb.group({
        id : new FormControl(this.charter.id),
        travelerId : new FormControl(this.charter.travelerId,[Validators.required]),
        travelerName : new FormControl(this.charter.travelerName),
        date : new FormControl(this.charter.date,[Validators.required]),
        sourceAddress : new FormControl(this.charter.sourceAddress,[Validators.required]),
        destinationAddress : new FormControl(this.charter.destinationAddress,[Validators.required]),
        price : new FormControl(this.charter.price,[Validators.required]),
        description : new FormControl(this.charter.description)
      });
    } else {
      this.charterForm = this.fb.group({
        id : new FormControl(null),
        travelerId : new FormControl(null,[Validators.required]),
        travelerName : new FormControl(null),
        date : new FormControl(null,[Validators.required]),
        sourceAddress : new FormControl(null,[Validators.required]),
        destinationAddress : new FormControl(null,[Validators.required]),
        price : new FormControl(null,[Validators.required]),
        description : new FormControl(null)
      });
    }
  }
 
  onSubmit(){
    let id = this.charterForm.value.travelerId;
    let trav :Person = this.travelers.filter(elem => elem.id == id)[0];
    this.charterForm.value.travelerName = trav.name;
    //si es editar
    if(this.charterForm.valid && this.charter){
      this.charterForm.value.id = this.charter.id;
    }
    //else si es agregar nuevo
    if (this.charterForm.valid ){
      console.log(this.charterForm);
      return this.showComponent.emit({"page":"add","charter":this.charterForm.value,"sale":this.saleObjSelected});
    }
  }

  showList(){
    this.showComponent.emit({"page":"list"});
  }

  onChange($event){
    this.charterForm.value.clientId = $event.target.value;
  }

  setSale(i:number){
    this.saleSelected = i;
    this.saleObjSelected = this.sales[i];
  }

}
