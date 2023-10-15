import { Component, Input } from '@angular/core';
import { TaskList } from 'src/TaskList';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.css']
})
export class TaskContainerComponent {

  @Input() data : TaskList = [];

}
