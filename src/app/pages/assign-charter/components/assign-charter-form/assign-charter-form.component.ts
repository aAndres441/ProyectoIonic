import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-assign-charter-form',
  templateUrl: './assign-charter-form.component.html',
  styleUrls: ['./assign-charter-form.component.scss'],
})
export class AssignCharterFormComponent implements OnInit {

  asignCharterForm: FormGroup;
  @Output() showComponent = new EventEmitter<any>();

  constructor(private fb : FormBuilder) { 
  }

  ngOnInit() {}

}
