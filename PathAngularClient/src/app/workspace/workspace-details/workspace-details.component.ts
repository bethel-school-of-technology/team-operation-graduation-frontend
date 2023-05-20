import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Workspace } from 'src/app/models/workspace.model';
import { WorkspaceService } from 'src/app/services/workspace.service';

import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-workspace-details',
  templateUrl: './workspace-details.component.html',
  styleUrls: ['./workspace-details.component.css']
})
export class WorkspaceDetailsComponent implements OnInit {
  id: string = "";
  currentWorkspace: Workspace = new Workspace();

  taskList: Task[] = [];
  toDo: Task[] = [];

  constructor(private workspaceService: WorkspaceService, private taskService: TaskService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("workspaceId") ?? "";
    this.id = routeId;
    
    this.loadWorkspace();
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasksByWorkspaceId(this.id).subscribe(foundTasks => {
      this.taskList = foundTasks;
      console.log(this.taskList);
      this.toDo = [];
      for(let task of this.taskList) {
        if(task.completed == false)
        {
          this.toDo.push(task);
        }
      }
    })
  }

  public completeTask(task: Task) {
    if (task.id != undefined) {
      task.completed = true;
      this.taskService.editTaskById(task.id, task).subscribe(edittedTask => {
        this.loadTasks();
      })
    }

  }

  loadWorkspace() {
    this.workspaceService.getWorkspaceById(this.id).subscribe(foundWorkspace => {
      this.currentWorkspace = foundWorkspace;
      console.log(this.currentWorkspace);
    })
  }
}
