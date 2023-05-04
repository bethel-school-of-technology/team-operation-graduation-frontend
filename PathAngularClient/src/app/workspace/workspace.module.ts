import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { CreateWorkspaceComponent } from './create-workspace/create-workspace/create-workspace.component';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';
import { EditWorkspaceComponent } from './edit-workspace/edit-workspace.component';
@NgModule({
  declarations: [
    WorkspaceComponent,
    CreateWorkspaceComponent,
    WorkspaceListComponent,
    EditWorkspaceComponent
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    HttpClientModule, 
    FormsModule,
  ]
})
export class WorkspaceModule { }
