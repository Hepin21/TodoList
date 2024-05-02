import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
// addTodo($event: Todo) {                           //*Use for solve error
// throw new Error('Method not implemented.');
// }

  // addTodo(todo: Todo) {
  //   console.log(todo);
  //   this.todos.push(todo);
  //   localStorage.setItem('todos', JSON.stringify(this.todos));  //* When any time update todo than save on local storage
  // }
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
 
  constructor(){}

  ngOnInit(): void{
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    // console.log("onClick has been triggerd");
  }
  onCheckboxClick(todo: any){
    this.todoCheckbox.emit(todo);
  }
}
