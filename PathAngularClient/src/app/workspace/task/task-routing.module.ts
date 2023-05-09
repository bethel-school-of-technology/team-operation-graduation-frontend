import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'task',
    pathMatch: 'full'
  },
  {
    path: 'task',
    component: TaskListComponent
  },
  {
    path: 'create',
    component: CreateTaskComponent
  },
  {
    path: ':taskId/edit',
    component: EditTaskComponent
  },
  {
    path: ':taskId/details',
    component: TaskDetailsComponent
  },
  {
    path: ':taskId',
    loadChildren: () => import('./note/note.module').then(m => m.NoteModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
