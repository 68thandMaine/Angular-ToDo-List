import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Code below this comment is reffered to as a class declaration
export class AppComponent {

title = 'The Angular To Do List';
currentFocus: string ="Angular Homework";
currentTime = new Date();
month: number = this.currentTime.getMonth() +1;
day: number = this.currentTime.getDate();
year: number = this.currentTime.getFullYear();

masterTaskList: Task[] = [
  new Task('Finish To Do List and notes', 3),
  new Task('Redo Recipe box project',2),
  new Task('Complete Angular Tour of Heros Tutorial',2),
  new Task('Take notes on Thursday homework',1)
];

// Whenever a suser clicks on the <li> element that has the click event binding on it, the selectedTask property changes to whcihever task was clicked on. It's sorta like a set method.
selectedTask: Task = null;
editTask(clickedTask) {
  this.selectedTask = clickedTask;
}

// priorityColor(currentTask) {
//   if(currentTask.priority == 3) {
//     return 'bg-danger';
//   } else if (currentTask.priority == 2) {
//     return 'bg-warning';
//   } else {
//     return 'bg-info';
//   }
// }

finishedEditing() {
  this.selectedTask =null;
}

}
