import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public isDone = false;
  @Input() todos;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() {
   }

  ngOnInit(): void {
  }

  doneTodo(): void {
    this.isDone = true;
  }

  deleteTodo(): void {
    this.delete.emit();
  }
}
