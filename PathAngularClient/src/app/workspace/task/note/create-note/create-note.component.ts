import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {
  id: string = "";
  currentTask: Task = new Task();
  
  note: string = '';

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

  createNote() {
    this.currentTask.notes?.push(this.note)
    this.taskService.editTaskById(this.id, this.currentTask).subscribe(response => {
      console.log(response);
    })
  }
}
