export enum ProjectStatus {
    OnHold = 'On Hold',
    Complete = 'Complete',
    Ongoing = 'Ongoing'
}

export interface Project {
    icon: string;
    more: string;
    description: string;
    body: string;
    status: ProjectStatus;
    name: string;
}

export interface ButterResponseProject {
    data: {
        project: Project[];
    };
}
