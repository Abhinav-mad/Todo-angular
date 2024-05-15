import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
@Input() task! :Task;
@Output()   onDeleteTask: EventEmitter<Task> = new EventEmitter;
@Output() onToggleTask : EventEmitter<Task> = new EventEmitter;
faTimes =faTimes;


constructor(){}

 handleDelete(task:Task){
  console.log(task) 
  this.onDeleteTask.emit(task)
 }

 onToggle(task:Task){
    this.onToggleTask.emit(task)
 }


}
