import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NoteListComponent } from './note-list/note-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'note',
    pathMatch: 'full',
  },
  {
    path: 'note',
    component: NoteListComponent
  },
  {
    path: 'create',
    component: CreateNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteRoutingModule { }
