import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-demo1',
  templateUrl: './select-demo1.component.html',
  styleUrls: ['./select-demo1.component.scss'],
})
export class SelectDemo1Component {
  form!: FormGroup;
  value: any = [];
  options: { value: string; label: string }[] = [];

  constructor(private formBuilder: FormBuilder) {
    for (let i = 1; i <= 10; i++) {
      this.options.push({ value: `opt${i}`, label: `Option ${i}` });
      this.value.push({ value: `opt${i}`, label: `Option ${i}` });
    }
  }

  ngOnInit(): void {
    this.initFormGroup();
  }

  onChangeValue(value: any) {
    this.value = value;
    console.log(value);
  }

  initFormGroup() {
    this.form = this.formBuilder.group({
      select: [
        this.value,
        [
          Validators.required,
        ],
      ]
    });
  }
}
