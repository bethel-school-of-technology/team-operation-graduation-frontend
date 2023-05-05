import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit{
  id: string = "";
  
  currentTask: Task = new Task();

  constructor(private taskService: TaskService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("taskId") ?? "";
    this.id = routeId;
    this.taskService.getTaskByTaskId(this.id).subscribe(foundTask => {
      this.currentTask = foundTask;
      console.log(this.currentTask);
    })
  }

  onSubmit() {
    this.taskService.editTaskById(this.id, this.currentTask).subscribe(edittedTask => {
      console.log(edittedTask);
      this.currentTask = edittedTask;
      this.router.navigateByUrl("workspace");
    })
  }

  deleteTask() {
    this.taskService.deleteTaskById(this.id).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("workspace");
    });
  } 
}
