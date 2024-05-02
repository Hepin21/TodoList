import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  // @Output() updateDataEvent = new EventEmitter<string>();  

  addTodo: FormGroup;
  // currentTime: string | undefined;


  constructor(private formBuilder: FormBuilder) {
    this.addTodo = this.formBuilder.group({
      title: ['', Validators.required],
      desc: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addTodo.valid) {
      // const currentDateTime = new Date();
      // this.currentTime = currentDateTime.toLocaleTimeString();

      const todo: Todo = {
        sno: 8,
        title: this.addTodo.value.title,
        desc: this.addTodo.value.desc,
        active: true
      };
      this.todoAdd.emit(todo);
    }
  }

  // Optionally, if you need to access individual form controls:
  // get title() {
  //   return this.addTodo.get('title');
  // }

  // get desc() {
  //   return this.addTodo.get('desc');
  // }
}


// export class AddTodoComponent implements OnInit{
//   title!:string;
//   desc!:string;
//   @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

//   addTodo = new FormGroup({
//     title: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
//     desc: new FormControl('',[Validators.required,Validators.minLength(5)]),
//   });

//   addTodos(){
//     console.warn(this.addTodo.value)
//   }
//   // get title(){
//   //   return this.addTodo.get('title')
//   // }
//   // get desc(){
//   //   return this.addTodo.get('desc')
//   // }
  
//   constructor(){}
//   ngOnInit(): void {
      
//   }
//   onSubmit(){
//     const todo = {
//       sno:8,
//       title:this.title,
//       desc:this.desc,
//       active: true
//     }
//     this.todoAdd.emit(todo);
//   }
// }


