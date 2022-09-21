import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IProject } from 'src/app/interfaces/project-item';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(config: NgbCarouselConfig, private formBuilder: FormBuilder, private projectService: ProjectService) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  addIcon = faPlus;
  formActivated:boolean = false;
  
  projects:IProject[] = [];
  projectForm: FormGroup = this.formBuilder.group({
    title:['', [Validators.required]], 
    short:['', [Validators.required]], 
    src:['', [Validators.required]],
    link:['', [Validators.required]]
  })

  projectRecivedTemp:IProject = {
    id: -1,
    title: '', 
    short: '', 
    src: '',
    link: ''
  }

  ngOnInit(): void {
    this.projects = this.projectService.Projects;
  }

  get Title() {
    return this.projectForm.get('title');
  }

  get Short(){
    return this.projectForm.get('short');
  }

  get Src(){
    return this.projectForm.get('src');
  }

  get Link(){
    return this.projectForm.get('link');
  }

  toggleForm(): void {
    this.formActivated = !this.formActivated;
  }

  modifyProject(project:IProject):void {
    this.projectService.modifyProject(project);
  }

  clearProjectTemp(project:IProject):void {
    project.id = -1;
    project.title = '';
    project.short = ''; 
    project.src = '';
    project.link = '';
  }

  projectToEditRecived(project: IProject): void {
    console.log("[ProjectsComponent] Proyecto recibido: ", project);
    this.projectRecivedTemp = project;
    this.formActivated = true;
  }

  onSend(event: Event): void {
    event.preventDefault();

    if(this.projectForm.valid){
      if(this.projectRecivedTemp.id! > -1)
      {
        this.projectForm.value.id! = this.projectRecivedTemp.id;
        this.modifyProject(this.projectForm.value as IProject);
        this.clearProjectTemp(this.projectRecivedTemp);
        this.projects = this.projectService.Projects;
        console.log("[ProjectsComponent] Lista de proyectos actualizada luego de modificación: ", this.projects);
        this.formActivated = false;
        this.projectForm.reset();
      }
      else{ 
        console.log("[ProjectsComponent] Info recibida desde el form: ", this.projectForm.value);
        this.projectService.addProject(this.projectForm.value as IProject);
        this.projects = this.projectService.Projects;
        console.log("[ProjectsComponent] Lista de proyectos actualizada: ", this. projects);
        this.projectForm.reset();
      }
      
    }
    else{
      alert("[ProjectsComponent] Formulario inválido");
      this.projectForm.markAllAsTouched();
    }
  }
}
