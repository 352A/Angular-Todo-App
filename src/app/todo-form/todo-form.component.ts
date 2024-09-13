import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  task: string = '';
  @Output() newTask = new EventEmitter<string>();

  addTask() {
    this.newTask.emit(this.task);
    this.task = '';
  }

  updateTask(event: Event) {
    this.task = (event.target as HTMLInputElement).value;
  }
}
