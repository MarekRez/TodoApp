import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../models/todo';
import {map, Observable} from 'rxjs';
import {Page} from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private todoAPI = "/api/todos";
  private http = inject(HttpClient);

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todoAPI, todo);
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<GetTodoResponse>(this.todoAPI)
        .pipe(map((data) => {
        return data._embedded.todos;
        })
    );
  }

  getTodosWithPagination(pageNum: number, size: number): Observable<GetTodoResponse> {
    const url = `${this.todoAPI}?page=${pageNum}&size=${size}`;
    return this.http.get<GetTodoResponse>(url);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.todoAPI}/${id}`);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.todoAPI}/${todo.id}`, todo);
  }

  patchTodoStatus(id: number, completedStatus: boolean): Observable<Todo> {
    return this.http.patch<Todo>(`${this.todoAPI}/${id}`, {
      completed: completedStatus
    });
  }

}

interface GetTodoResponse {
  _embedded: {
    todos: Todo[];
  };
  page: Page;
}
