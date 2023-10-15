import { Component, Input, OnInit } from '@angular/core';
import Task from '../../Task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit{

  tasks : any;

  constructor() {
  }

  // @Input() tasks: Task[];

    ngOnInit(): void {
        this.tasks = [
          {
            "id": 1,
            "date": "2023-10-15",
            "title": "Zadanie 1",
            "content": "Zrealizować pierwsze zadanie na liście."
          },
          {
            "id": 2,
            "date": "2023-10-16",
            "title": "Zadanie 2",
            "content": "Przygotować raport na temat postępu prac."
          },
          {
            "id": 3,
            "date": "2023-10-17",
            "title": "Zadanie 3",
            "content": "Spotkanie z zespołem w godzinach popołudniowych."
          },
          {
            "id": 4,
            "date": "2023-10-18",
            "title": "Zadanie 4",
            "content": "Ostateczna ocena projektu i przygotowanie prezentacji."
          }
        ];
  }
}
