import { Injectable } from '@angular/core';
import  Task  from 'src/Task';
// import { tasks } from 'src/tasks-mockup'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) {}

  getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL)
  }

  deleteTask(task: Task): Observable<Task> {
    console.log('delete ' + task.id)
    const url = `${this.apiURL}/${task.id}`
    console.log(url)
    let result = this.http.delete<Task>(url)
    console.log(result)
    return result
  }
}
