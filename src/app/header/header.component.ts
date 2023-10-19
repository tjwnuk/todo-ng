import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { NewTodoComponent } from '../new-todo/new-todo.component';
// import tasks from '../../tasks-mockup'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @Input() tasks = tasks;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(NewTodoComponent, dialogConfig);
  }

}
