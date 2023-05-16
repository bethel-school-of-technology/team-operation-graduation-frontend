import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  newTask: Task = new Task();
  workspaceId: string = '';
  
  constructor(private taskService: TaskService, private router: Router, private actRoute: ActivatedRoute) { }  
  
  onSubmit() {
    this.workspaceId = this.actRoute.snapshot.paramMap.get("workspaceId") ?? "";
    this.newTask.workspaceId = this.workspaceId;
    if (!this.newTask.name) {
      alert('fill out name');
      return;
    }
    if (!this.newTask.description) {
      alert('fill out description');
      return;
    }
    this.taskService.createNewTask(this.newTask, this.workspaceId).subscribe(response => {
      console.log(response);
      this.router.navigate(['workspace/' + this.workspaceId + '/task'])
    })
  }

}
