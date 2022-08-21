import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IProject } from 'src/app/interfaces/project-item';
import { Projects } from 'src/assets/mocks-lists/MockProjectItems';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  addIcon = faPlus;
  
  projects:IProject[] = Projects;

  ngOnInit(): void {
  }

}
