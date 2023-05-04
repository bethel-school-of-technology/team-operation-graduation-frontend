import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Workspace } from 'src/app/Models/workspace.model';
import { WorkspaceService } from 'src/app/services/workspace.service';

@Component({
  selector: 'app-workspace-details',
  templateUrl: './workspace-details.component.html',
  styleUrls: ['./workspace-details.component.css']
})
export class WorkspaceDetailsComponent implements OnInit {
  id: string = "";

  currentWorkspace: Workspace = new Workspace();

  constructor(private workspaceService: WorkspaceService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("workspaceId") ?? "";
    this.id = routeId;
    this.workspaceService.getWorkspaceById(this.id).subscribe(foundWorkspace => {
      console.log(foundWorkspace);
      this.currentWorkspace = foundWorkspace;
    })
  }
}
