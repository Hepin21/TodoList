import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-mytodos',
  templateUrl: './mytodos.component.html',
  styleUrls: ['./mytodos.component.css']
})
export class MytodosComponent {

  todos: Todo[];
  localItem: string;

  constructor() {
    this.localItem = localStorage.getItem("todos") as string;
    if (this.localItem == null) {
      this.todos = [];
    } else {    
      this.todos = JSON.parse(this.localItem);
    }
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));  //* When any time update todo than save on local storage
  }
}
