import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {register} from "../../../store/actions";

@Component({
  selector: 'mc-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private store: Store) {
    console.log('form', this.form.getRawValue());
    this.store.dispatch(register());
  }
}
