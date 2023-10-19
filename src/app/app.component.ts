import { Component } from '@angular/core';
import Task from '../Task';
import { TaskList } from 'src/TaskList';
import { tasks } from 'src/tasks-mockup';
// import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from './new-todo/new-todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-ng';

  // data : TaskList = tasks;
  // data : TaskList = [];
}
