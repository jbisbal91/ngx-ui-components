import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input-demo2',
  templateUrl: './input-demo2.component.html',
  styleUrls: ['./input-demo2.component.scss'],
})
export class InputDemo2Component implements OnInit {
  inputFormControl = new FormControl(null, [Validators.required]);
  inputForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup() {
    this.inputForm = this.formBuilder.group({
      input3: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
    });
  }
}
