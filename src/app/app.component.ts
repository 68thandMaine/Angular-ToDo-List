import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'The Angular To Do List';
  currentFocus: string ="Angular Homework";
  currentTime = new Date();
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  tasks: Task[] = [
    new Task('Finish To Do List and notes'),
    new Task('Redo Recipe box project'),
    new Task('Complete Angular Tour of Heros Tutorial'),
    new Task('Take notes on Thursday homework')
  ];
}
