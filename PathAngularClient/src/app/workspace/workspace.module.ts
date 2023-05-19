import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';
import { CreateWorkspaceComponent } from './create-workspace/create-workspace/create-workspace.component';
import { EditWorkspaceComponent } from './edit-workspace/edit-workspace.component';
import { WorkspaceDetailsComponent } from './workspace-details/workspace-details.component';

import { TaskModule } from './task/task.module';
import { CreateTaskComponent } from './task/create-task/create-task.component';

@NgModule({
  declarations: [
    WorkspaceComponent,
    CreateWorkspaceComponent,
    WorkspaceListComponent,
    EditWorkspaceComponent,
    WorkspaceDetailsComponent,
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    HttpClientModule, 
    FormsModule,
    MatCardModule,
    TaskModule
  ]
})
export class WorkspaceModule { }
