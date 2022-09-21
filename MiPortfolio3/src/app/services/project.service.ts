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

  private findProjectItem(project: IProject):number{
    return this.projects.findIndex(item => item.id == project.id);
  }

  modifyProject(project: IProject):void{
    let index = this.findProjectItem(project);
    if(index > -1){
      this.projects[index] = project;
      console.log("[ProjectService] Proyecto modificado en indice: ",index," Resultado: ", this.projects);
    }
    else{ 
      console.log("[ProjectService] Proyecto no encontrado");
    }
  }
}
