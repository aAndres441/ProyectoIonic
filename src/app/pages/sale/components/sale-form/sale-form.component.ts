import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NG_VALUE_ACCESSOR ,ControlValueAccessor} from '@angular/forms';
import { Sale } from '../../model/sale.model';

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SaleFormComponent),
    }
  ]
})
export class SaleFormComponent implements OnInit {
  @Input() sale : Sale;
  @Output() showComponent = new EventEmitter<any>();

  public saleForm:FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.saleForm = new FormGroup({
        id : new FormControl(this.sale.id, ),
        clientName : new FormControl(this.sale.clientName,[Validators.required]),
        description : new FormControl(this.sale.description, [Validators.required]),
        totalAmount : new FormControl(this.sale.totalAmount,[Validators.required]),
        tmstmp : new FormControl(this.sale.tmstmp,[Validators.required])
      }
    );
  }
  /* id : number;
    clientId : number;
    clientName : string;
    description : string;
    totalAmount : number;
    tmstmp: Date */


  onSubmit(){
    //si es editar
    if(this.saleForm.valid && this.sale.id){
      this.saleForm.value.id = this.sale.id;
    }
    //else si es agregar nuevo
    if (this.saleForm.valid){
      return this.showComponent.emit({"page":"add","sale":this.saleForm.value});
    }
  }

  showList(){
    this.showComponent.emit({"page":"list"});
  }

}
