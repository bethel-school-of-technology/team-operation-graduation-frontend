import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit{
  id: string = "";

  currentTask: Task = new Task();

  constructor(private taskService: TaskService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("taskId") ?? "";
    this.id = routeId;

    this.loadTask();
  }
  loadTask() {
    this.taskService.getTaskByTaskId(this.id).subscribe(foundTask => {
      this.currentTask = foundTask;
      console.log(this.currentTask);
    })
  }
}
