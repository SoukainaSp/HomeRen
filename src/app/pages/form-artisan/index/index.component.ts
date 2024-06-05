import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  validateForm: FormGroup<{
    datePicker: FormControl<Date | null>;
    datePickerTime: FormControl<Date | null>;
    monthPicker: FormControl<Date | null>;
    rangePicker: FormControl<[Date, Date] | null>;
    rangePickerTime: FormControl<[Date, Date] | null>;
    timePicker: FormControl<Date | null>;
  }> = this.fb.group({
    datePicker: this.fb.control<Date | null>(null),
    datePickerTime: this.fb.control<Date | null>(null),
    monthPicker: this.fb.control<Date | null>(null),
    rangePicker: this.fb.control<[Date, Date] | null>(null),
    rangePickerTime: this.fb.control<[Date, Date] | null>(null),
    timePicker: this.fb.control<Date | null>(null)
  });

  submitForm(): void {
    console.log(this.validateForm.value);
  }

  constructor(private fb: FormBuilder) {}
}