import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  public form: FormGroup;
  public todos: any[] = [
    { title: 'Написать ToDO',
      description: 'Ты должен иметь возможность добавить задачу, удалить задачу, отметить её как выполненную, должно быть название задачи и описание'}
  ];

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  addTodo(): void {
    this.todos.unshift(this.form.value);
    this.form.reset();
  }

  deleteItem(idx: number): void {
    this.todos.splice(idx, 1);
  }
}
