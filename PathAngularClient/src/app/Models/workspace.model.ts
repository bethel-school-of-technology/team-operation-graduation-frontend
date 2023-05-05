export class Workspace {
    id?: string = '';
    name?: string = '';
    description?: string = '';
    goals?: string[] = [];

    constructor(id?: string, name?: string, description?: string, goals?: string[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.goals = goals;
    }
}
