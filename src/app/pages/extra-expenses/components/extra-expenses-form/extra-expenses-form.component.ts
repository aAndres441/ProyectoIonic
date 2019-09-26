import { ExtraExpense } from './../../model/extra-expense.model';
import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-extra-expenses-form',
  templateUrl: './extra-expenses-form.component.html',
  styleUrls: ['./extra-expenses-form.component.scss'],
})
export class ExtraExpensesFormComponent implements OnInit {
  @Input() extraExpense : ExtraExpense;
  @Output() showComponent = new EventEmitter<any>();

  public extraExpenseForm:FormGroup;

  constructor(private fb : FormBuilder, public toastController: ToastController) { 
 
  }

  ngOnInit() {
    if(this.extraExpense){
      this.extraExpenseForm = this.fb.group({
        id: new FormControl(this.extraExpense.id,),
        description: new FormControl(this.extraExpense.description, [Validators.required]),
        price:new FormControl(this.extraExpense.price, [Validators.required])
      });
    }else{
      this.extraExpenseForm = this.fb.group({
        id: new FormControl(null,),
        description: new FormControl(null, [Validators.required]),
        price:new FormControl(null, [Validators.required])
      });
    }
  }

  onSubmit(){
    //si es editar
    if(this.extraExpenseForm.valid && this.extraExpense){
      this.extraExpenseForm.value.id = this.extraExpense.id;
    }
    //else si es agregar nuevo
    if (this.extraExpenseForm.valid){
      this.succes();
      return this.showComponent.emit({"page":"add","extraExpense":this.extraExpenseForm.value});
    }
  }

  showList(){
    this.showComponent.emit({"page":"list"});
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Verifique los datos',
      position: 'top',
      color: 'danger',
      duration: 3000
    });
    toast.present();
  }
  async succes(){
    const toast = await this.toastController.create({
      message: 'Cambio exitoso',
      position: 'top',
      color: 'success',
      duration: 3000
    });
    toast.present();
  }
}
