export class ThingsToDo {
    id!: number;
    title!: string;
    creator!: string;
    description!: string;
    priority!: string;
    severity!: string;
    status!: string;
}

export class Priority {
    id!: number;
    degree!: string;
}

export class Severity {
    id!: number;
    degree!: string;
}

export class Status {
    id!: number;
    status!: string;
}