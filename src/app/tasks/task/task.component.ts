import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  // @Output() complete = new EventEmitter<string>();

  // with dependency injection (method 1)
  private tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  onCompleteTask() {
    // this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);
  }
}
