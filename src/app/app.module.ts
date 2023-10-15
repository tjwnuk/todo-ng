import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskContainerComponent } from './task-container/task-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskCardComponent,
    TaskContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
