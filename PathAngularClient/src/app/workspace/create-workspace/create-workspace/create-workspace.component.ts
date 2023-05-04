import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Workspace } from 'src/app/Models/workspace.model';
import { WorkspaceService } from 'src/app/services/workspace.service';

@Component({
  selector: 'app-create-workspace',
  templateUrl: './create-workspace.component.html',
  styleUrls: ['./create-workspace.component.css']
})
export class CreateWorkspaceComponent {
  newWorkspace: Workspace = new Workspace();

  constructor(private workspaceService: WorkspaceService, private router: Router) { }

  onSubmit() {
    this.workspaceService.createNewWorkspace(this.newWorkspace).subscribe(response => {
      console.log(response);
      this.router.navigate(['']);
    })
  }
}
// ngOnInit() { }
// submitForm() {
//   var formData: any = new FormData();
//   formData.append("title", this.form.get('title').value);
//   formData.append("description", this.form.get('description').value);
//   this.http.post('http://localhost:4200/workspace', formData).subscribe(
//     (response) => console.log(response),
//     (error) => console.log(error)
//   )
// }
// }