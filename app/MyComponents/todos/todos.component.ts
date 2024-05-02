import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  
  localItem: string;
  todos: Todo[];

  constructor() {
    this.localItem = localStorage.getItem("todos") as string;
    if (this.localItem == null) {
      this.todos = [];
    } else {    
      this.todos = JSON.parse(this.localItem);
    }
  }
  ngOnInit(): void {}
  
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));  //* When any time update todo than save on local storage
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));  //* When any time update todo than save on local storage
  }
  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  
  // data = "x";
  // updateData(item:string){
  //   console.warn(item);
  //   this.data =item;
  // }
}
