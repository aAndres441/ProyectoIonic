import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-charter-form',
  templateUrl: './charter-form.component.html',
  styleUrls: ['./charter-form.component.scss'],
})
export class CharterFormComponent implements OnInit {

  @Output() showComponent = new EventEmitter<any>();
  public charterForm: FormGroup;
  
  constructor(private fb : FormBuilder) { }

  ngOnInit() {}

}
