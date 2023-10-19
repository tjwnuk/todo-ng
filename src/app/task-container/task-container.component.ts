import { Component, Input } from '@angular/core';
import { TaskList } from 'src/TaskList';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.css']
})
export class TaskContainerComponent {

  // @Input() data : TaskList = [];

  data: TaskList = [];

  constructor(private taskService : TaskService) {}

  ngOnInit(){
    this.data = this.taskService.getTasks();
  }

}
