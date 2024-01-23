import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input-demo1',
  templateUrl: './input-demo1.component.html',
  styleUrls: ['./input-demo1.component.scss'],
})
export class InputDemo1Component implements OnInit {
  ngxSize: any = 'medium';
  ngxRounded: any = 'medium';
  ngxFillMode: any = 'filled';
  input1 = '';
  input2 = '';

  formGroup!: FormGroup;
  emailFormControl = new FormControl('jbisbal@gmail.com', [Validators.required, Validators.email]);
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: ['jbisbal@gmail.com', [Validators.required, Validators.email]],
    });
  }
}
