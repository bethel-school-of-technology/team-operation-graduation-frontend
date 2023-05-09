import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateWorkspaceComponent } from './create-workspace/create-workspace/create-workspace.component';
import { EditWorkspaceComponent } from './edit-workspace/edit-workspace.component';
import { WorkspaceDetailsComponent } from './workspace-details/workspace-details.component';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';
import { WorkspaceComponent } from './workspace.component';

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
        path: ':workspaceId',
        loadChildren: () => import('./task/task.module').then(m => m.TaskModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
