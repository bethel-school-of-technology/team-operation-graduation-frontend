export class Task {
    id?: string = '';
    workspaceId?: string = '';
    name?: string = '';
    description?: string = '';
    notes?: string[] = [];
    completed?: boolean = false;

    constructor(id?: string, workspaceId?: string, name?: string, description?: string, notes?: string[], completed?: boolean) { 
        this.id = id;
        this.workspaceId = workspaceId;
        this.name = name;
        this.description = description;
        this.notes = notes;
        this.completed = completed;
    }
}
