import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http'
=======
import { FormsModule } from '@angular/forms';
>>>>>>> origin/main

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { CreateWorkspaceComponent } from './create-workspace/create-workspace/create-workspace.component';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WorkspaceComponent,
    CreateWorkspaceComponent,
    WorkspaceListComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    WorkspaceRoutingModule,
    HttpClientModule, 
    FormsModule,
=======
    FormsModule,
    WorkspaceRoutingModule
>>>>>>> origin/main
  ]
})
export class WorkspaceModule { }
