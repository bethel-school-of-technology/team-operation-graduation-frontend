import { Component, OnInit } from '@angular/core';
import { Workspace } from 'src/app/models/workspace.model';
import { WorkspaceService } from 'src/app/services/workspace.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-workspace',
  templateUrl: './edit-workspace.component.html',
  styleUrls: ['./edit-workspace.component.css']
})
export class EditWorkspaceComponent implements OnInit {
  id: string = "";

  currentWorkspace: Workspace = new Workspace();

  constructor(private workspaceService: WorkspaceService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("workspaceId") ?? "";
    this.id = routeId;
    this.workspaceService.getWorkspaceById(this.id).subscribe(foundWorkspace => {
      console.log(foundWorkspace);
      this.currentWorkspace = foundWorkspace;
    })
  }

  onSubmit() {
    this.workspaceService.editWorkspaceById(this.id, this.currentWorkspace).subscribe(edittedWorkspace => {
      console.log(edittedWorkspace);
      this.router.navigateByUrl("/workspace");
    })
  }
}
