import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateWorkspaceComponent } from './create-workspace/create-workspace/create-workspace.component';
import { EditWorkspaceComponent } from './edit-workspace/edit-workspace.component';
import { WorkspaceDetailsComponent } from './workspace-details/workspace-details.component';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';
import { WorkspaceComponent } from './workspace.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';

const routes: Routes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: WorkspaceListComponent
      },
      {
        path: 'details/:workspaceId',
        component: WorkspaceDetailsComponent
      },
      {
        path: 'edit/:workspaceId',
        component: EditWorkspaceComponent
      },
      {
        path: 'create',
        component: CreateWorkspaceComponent
      },
      {
        path: ':workspaceId/task-list',
        component: TaskListComponent
      },
      {
        path: ':workspaceId/create-task',
        component: CreateTaskComponent
      },
      {
        path: ':workspaceId/:taskId/edit-task',
        component: EditTaskComponent
      },
      {
        path: ':workspaceId/:taskId',
        component: TaskDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
