import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // @Input() name: string | undefined;
  @Input() name?: string;
}
