import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  datasource: string = "http://localhost:5012/api/task";

  constructor(private http: HttpClient) { }

  getTaskByTaskId(id: string): Observable<Task> {
    return this.http.get<Task>(this.datasource + '/' + id);
  }
  
  getTasksByWorkspaceId(workspaceId: string): Observable<Task[]> {
    return this.http.get<Task[]>(this.datasource + '/WS/' + workspaceId);
  }

  createNewTask(newTask: Task, workspaceId: string): Observable<Task> {
    return this.http.post<Task>(this.datasource + '?workspaceId=' + workspaceId, newTask);
  }

  editTaskById(id: string, edittedTask: Task): Observable<Task> {
    return this.http.put<Task>(this.datasource + '/' + id, edittedTask);
  }

  deleteTaskById(id: string): Observable<any> {
    return this.http.delete<any>(this.datasource + "/" + id);
  }
}
