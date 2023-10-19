import { Component, Input } from '@angular/core';
import { TaskList } from 'src/TaskList';
import { TaskService } from '../services/task.service';
import Task from 'src/Task';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.css']
})
export class TaskContainerComponent {

  data: TaskList = [];

  constructor(private taskService : TaskService) {}

  ngOnInit(){
    this.taskService.getTasks().subscribe((tasks)=>{this.data = tasks})
  }
  
  handleDelete(task: Task) {
    // it's important to add subscribe because otherwise http.delete from service won't work
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.data = this.data.filter((t) => t.id !== task.id))
      );
  }

}
