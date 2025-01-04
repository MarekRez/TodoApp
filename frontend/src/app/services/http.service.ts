import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../models/todo';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private todoAPI = "/api/todos";
  private http = inject(HttpClient);

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todoAPI, todo);
  }

  getTodo(): Observable<Todo[]> {
    return this.http.get<GetTodoResponse>(this.todoAPI).pipe(
      map((data) => {
        return data._embedded.todos;
      })
    );
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.todoAPI}/${id}`);
  }

}

  interface GetTodoResponse {
  _embedded: {
    todos: Todo[];
  };
}

