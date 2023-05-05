export class Task {
    id?: string = '';
    workspaceId?: string = '';
    name?: string = '';
    description?: string = '';
    // notes?: string[] = [];
    completed?: boolean = false;

    constructor(id?: string, workspaceId?: string, name?: string, description?: string, completed?: boolean) { 
        this.id = id;
        this.workspaceId = workspaceId;
        this.name = name;
        this.description = description;
        this.completed = completed;
    }
}
