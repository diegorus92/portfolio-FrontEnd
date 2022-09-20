import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/project-item';
import { Projects } from 'src/assets/mocks-lists/MockProjectItems';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: IProject[] = Projects;

  constructor() { }

  get Projects(){
    return this.projects;
  }

  private setId():number{
    return this.projects.length > 0 ? Math.max(...this.projects.map(project => project.id!)) + 1 : 1;
  }

  addProject(project: IProject):void{
    console.log("[ProjectService] se agregará id a :", project);
    project.id = this.setId();
    this.projects.push(project);
    console.log("[ProjectService] se agregó proyecto: ", project);
    console.log("[ProjectService] ", this.projects);
  }
}
