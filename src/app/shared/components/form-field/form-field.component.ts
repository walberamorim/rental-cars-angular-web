import {
  AfterViewInit,
  Component,
  ContentChild,
  Input,
} from '@angular/core';
import { NgControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent implements  AfterViewInit {
  @Input() id!: string;

  @Input() label!: string;

  @ContentChild(NgControl) input!: NgControl;

  ngAfterViewInit(): void {
    if (!this.input) {
      throw new Error(
        'Esse componente deve ser usado com NgModel ou formControl'
      );
    }
  }

  hasRequired() {
    return this.input.control?.hasValidator(Validators.required);
  }
}
