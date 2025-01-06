import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ToastComponent} from './components/toast/toast.component';
import {HttpService} from "./services/http.service";
import {Todo} from "./models/todo";

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
  private httpService = inject(HttpService);

  todoForm!: FormGroup;
  todos: Todo[] = [];
  isEditMode: boolean = false;

  ngOnInit(): void {
     this.todoForm = this.formBuilder.group({
       id: [''],
       name: ['', Validators.required],
       description: [''],
       completed: [false]
    });
     this.getTodos();
  }

  getTodos() {
    this.httpService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  submitTodo() {
    if (this.todoForm.invalid) {
      return;
    }
    if (this.isEditMode) {
      this.updateTodo(this.todoForm.value);
    }
    else {
      const formValue: Todo = this.todoForm.value;
      const todoRequest: Todo = {
        name: formValue.name,
        description: formValue.description,
        completed: false,
      };
      this.httpService.createTodo(todoRequest).subscribe((data) => {
        this.getTodos();
      });
    }
  }

  deleteTodo(id: number) {
    this.httpService.deleteTodo(id).subscribe((data) => {
      this.getTodos();
    });
  }

  updateTodo(todo: Todo) {
      this.httpService.updateTodo(todo).subscribe((data) => {
      this.getTodos();
      this.todoForm.reset();
      });
  }

  showToast(): void {
    // Example
    console.log('Toast Message:');
  }

  handleEdit(todo: Todo) {
    this.isEditMode = true;
    delete todo.dateCreated;
    delete todo.lastUpdated;
    this.todoForm.setValue(todo);
  }
}
