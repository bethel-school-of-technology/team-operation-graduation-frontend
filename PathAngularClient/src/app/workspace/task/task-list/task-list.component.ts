import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList: Task[] = [];
  
  id: string = "";

  constructor(private actRoute: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("workspaceId") ?? "";
    this.id = routeId;
    console.log(routeId)
    
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasksByWorkspaceId(this.id).subscribe(foundTasks => {
      this.taskList = foundTasks;
      console.log(this.taskList)
    })
  }
}
