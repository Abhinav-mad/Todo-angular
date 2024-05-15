import { Component,OnInit } from '@angular/core';
import {Task} from '../../Task'
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks :Task[] = [];

  constructor(private taskServive : TaskService){}
  ngOnInit(): void{
    this.taskServive.getTask().subscribe((tasks) => (
      this.tasks = tasks
    ));
  }

  deleteTask(task :Task){
    this.taskServive.deleteTask(task).subscribe(()=>(
      this.tasks = this.tasks.filter(t=>t.id !== task.id)
    ))
  }
 
  updateReminder(task :Task){
    task.reminder = !task.reminder
    this.taskServive.updateReminder(task).subscribe()
  }

  addTask(task:Task){
    this.taskServive.addTask(task).subscribe((task) => (
      this.tasks.push(task)
    ));
  }
}
