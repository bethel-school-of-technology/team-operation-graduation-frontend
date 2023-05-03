import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workspace } from '../Models/workspace.model';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  datasource: string = "http://localhost:5012/api/workspace";
  
  constructor(private http: HttpClient) { }

  getAllWorkspaces(): Observable<Workspace[]> {
    return this.http.get<Workspace[]>(this.datasource);
  }

  createNewWorkspace(newWorkspace: Workspace): Observable<Workspace> {
    return this.http.post<Workspace>(this.datasource, newWorkspace);
  }

  getWorkspaceById(id: string): Observable<Workspace> {
    return this.http.get<Workspace>(this.datasource + "/" + id);
  }

  editWorkspaceById(id: string, edittedWorkspace: Workspace): Observable<Workspace> {
    return this.http.put<Workspace>(this.datasource + "/" + id, edittedWorkspace);
  }

  deleteWorkspaceById(id: string): Observable<any> {
    return this.http.delete<any>(this.datasource + "/" + id);
  }
}
