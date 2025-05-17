import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  // @Input() name: string | undefined; or @Input() name?: string;
  isAddingTask = false;
  // without dependency injection
  //private tasksService = new TasksService();

  // with dependency injection (method 1)
  // private tasksService: TasksService;
  // constructor(tasksService: TasksService) {
  //   this.tasksService = tasksService;
  // }

  // with dependency injection (method 2)
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string) {
  //   this.tasksService.removeTask(id);
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData) {
  //   this.tasksService.addTask(taskData, this.userId);
  //   this.isAddingTask = false;
  // }
}
