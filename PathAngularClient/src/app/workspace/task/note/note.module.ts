import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { NoteRoutingModule } from './note-routing.module';
import { NoteComponent } from './note.component';
import { CreateNoteComponent } from './create-note/create-note.component'; 
import { NoteListComponent } from './note-list/note-list.component';

@NgModule({
  declarations: [
    NoteComponent,
    CreateNoteComponent,
    NoteListComponent
  ],
  imports: [
    CommonModule,
    NoteRoutingModule,
    FormsModule
  ]
})
export class NoteModule { }
