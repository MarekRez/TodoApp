import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ToastComponent} from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    ToastComponent,
    ReactiveFormsModule
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private formBuilder = inject(FormBuilder);

  todoForm!: FormGroup;

  ngOnInit(): void {
     this.todoForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      completed: [false]
    });
  }

  submitTodo(): void {
    if (this.todoForm.valid) {
      console.log('Form Data:', this.todoForm.value);
      // Handle the form submission logic here
    } else {
      console.log('Form is invalid');
    }
  }

  showToast(): void {
    // Example
    console.log('Toast Message:');
  }
}
