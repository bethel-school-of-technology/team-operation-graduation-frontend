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
        path: 'create',
        component: CreateWorkspaceComponent
      },
      {
        path:'list/:workspaceId',
        component: WorkspaceDetailsComponent
      },
      {
        path: 'list/edit/:workspaceId',
        component: EditWorkspaceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
