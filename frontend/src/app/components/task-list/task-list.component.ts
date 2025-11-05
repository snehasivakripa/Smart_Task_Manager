import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
@Component({
  selector: 'app-task-list',
    standalone: true, 
  imports: [CommonModule,FormsModule,MaterialModule], 
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = { title: '', description: '', status: 'TODO' };

  constructor(private service: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.service.getTasks().subscribe(data => (this.tasks = data));
  }

  addTask() {
    this.service.addTask(this.newTask).subscribe(() => {
      this.newTask = { title: '', description: '', status: 'TODO' };
      this.loadTasks();
    });
  }

deleteTask(id?: string) {
  if (!id) {
    console.error('Task ID is undefined');
    return;
  }
  console.log('Deleting task with id:', id);
  this.service.deleteTask(id).subscribe({
    next: () => this.loadTasks(),
    error: (err) => console.error('Delete failed', err)
  });
}

}
