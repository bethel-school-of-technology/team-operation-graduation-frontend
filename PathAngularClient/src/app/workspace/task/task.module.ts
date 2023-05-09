import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';

@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    EditTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatCardModule,
    FormsModule
  ]
})
export class TaskModule { }
