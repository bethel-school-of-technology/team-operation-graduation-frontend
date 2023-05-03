import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { CreateWorkspaceComponent } from './create-workspace/create-workspace/create-workspace.component';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';


@NgModule({
  declarations: [
    WorkspaceComponent,
    CreateWorkspaceComponent,
    WorkspaceListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WorkspaceRoutingModule
  ]
})
export class WorkspaceModule { }
