import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-input-demo3',
  templateUrl: './input-demo3.component.html',
  styleUrls: ['./input-demo3.component.scss'],
})
export class InputDemo3Component implements OnInit {
  type: 'password' | 'text' = 'password';
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup() {
    this.loginForm = this.formBuilder.group({
      email: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  onSubmit() {
    console.log(this.loginForm.controls)
  }
}
