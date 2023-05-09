import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  id: string = '';
  currentTask: Task = new Task();

  constructor(private actRoute: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("taskId") ?? "";
    this.id = routeId;

    this.getTask();
  }

  getTask() {
    this.taskService.getTaskByTaskId(this.id).subscribe(foundTask => {
      this.currentTask = foundTask;
      console.log(this.currentTask);
    })
  }
}
