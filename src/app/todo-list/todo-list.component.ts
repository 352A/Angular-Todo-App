import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() tasks: string[] = [];

  @Output() deleteTask = new EventEmitter<number>();

  onDeleteTask(index: number) {
    this.deleteTask.emit(index);
  }
}
