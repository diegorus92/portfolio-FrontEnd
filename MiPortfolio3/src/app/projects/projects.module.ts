import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectItemComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
