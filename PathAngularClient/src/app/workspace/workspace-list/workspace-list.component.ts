import { Component } from '@angular/core';
import { Workspace } from 'src/app/models/workspace.model';
import { WorkspaceService } from 'src/app/services/workspace.service';

@Component({
  selector: 'app-workspace-list',
  templateUrl: './workspace-list.component.html',
  styleUrls: ['./workspace-list.component.css']
})
export class WorkspaceListComponent {
  workspaceList: Workspace[] = [];
  listEmpty: boolean = false;

  constructor(private workspaceService: WorkspaceService) { }

  ngOnInit(): void {
    this.loadWorkspaces();
  }

  onDelete(id: string | undefined = '') {
    this.workspaceService.deleteWorkspaceById(id).subscribe(response => {
      console.log(response);
      this.loadWorkspaces();
    })
  }

  loadWorkspaces() {
    this.workspaceService.getAllWorkspaces().subscribe(foundWorkspaces => {
      console.log(foundWorkspaces);
      this.workspaceList = foundWorkspaces;

      if(this.workspaceList.length == 0)
      {
        this.listEmpty = true;
      }
    })
  }
}
