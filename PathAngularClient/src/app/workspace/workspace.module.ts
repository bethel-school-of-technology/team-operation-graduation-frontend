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

import { TaskListComponent } from './task/task-list/task-list.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';

@NgModule({
  declarations: [
    WorkspaceComponent,
    CreateWorkspaceComponent,
    WorkspaceListComponent,
    EditWorkspaceComponent,
    TaskListComponent,
    CreateTaskComponent,
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    HttpClientModule, 
    FormsModule,
    MatCardModule
  ]
})
export class WorkspaceModule { }
