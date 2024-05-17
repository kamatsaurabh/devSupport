import { Injectable } from '@angular/core';

export class Jobs {
    ID?: number;
    Workflow_Status?: string;
    Workflow?: string;
}

const employees: Jobs[] = [
    {
        ID: 1,
        Workflow_Status: 'AA',
        Workflow: 'Check Icon',
    },
    {
        ID: 2,
        Workflow_Status: 'AA',
        Workflow: 'Check Icon',
    },

];

@Injectable()
export class devjobsService {
    getEmployees() {
        return employees;
    }
}