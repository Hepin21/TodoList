import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector } from '@angular/core';

// import 'web-component-essentials';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponents/about/about.component';
import { MytodosComponent } from './MyComponents/mytodos/mytodos.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    MytodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

  // bootstrap: [],                                        //*direct ng build and compile this component 
  // schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


// export class AppModule implements DoBootstrap{ 

//   constructor(private injector: Injector){}

//   ngDoBootstrap(appRef : ApplicationRef): void {
//       const addTodos = createCustomElement(MytodosComponent,{injector: this.injector});
//       customElements.define('add-todos', addTodos);   //*Use for Create and Register Custom Web Component     direct ng build and compile this component
//       // const showTodos = createCustomElement(TodosComponent,{injector: this.injector});
//       // customElements.define('show-todos', showTodos);   //*Use for Create and Register Custom Web Component
//       // const about = createCustomElement(AboutComponent,{injector: this.injector});
//       // customElements.define('about-todos', about);   //*Use for Create and Register Custom Web Component
//   }
//  }
      //* COMMENTED PART IS USE FOR THE BUILD PARTICULAR COMPONENT *//