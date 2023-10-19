import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import Task from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {

  @Input() task!: Task;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>()

  faTimes = faTimes;

  onDelete(task: Task) {
    this.deleteEvent.emit(task)
    // alert(this.task.id)
  }

}
