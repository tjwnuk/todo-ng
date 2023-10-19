import { Injectable } from '@angular/core';
import  Task  from 'src/Task';
import { tasks } from 'src/tasks-mockup'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks() : Task[] {
    return tasks;
  }
}
