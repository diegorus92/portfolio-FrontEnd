import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSquarePen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { IProject } from 'src/app/interfaces/project-item';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  constructor() { }

  editIcon = faSquarePen;
  removeIcon = faTrashCan;


  @Input() project = {
    title: 'First Slide', 
    short: 'First Slide Short', 
    src: "https://picsum.photos/id/700/900/500",
    link: "#"
  }; 

  @Output() projectToEditEvent = new EventEmitter<IProject>();
  @Output() projectToRemoveEvent = new EventEmitter<IProject>();

  ngOnInit(): void {
  }

  projectToEditEmitter(project: IProject): void{
    this.projectToEditEvent.emit(project);
  }

  projectToRemoveEmitter(project: IProject): void{
    this.projectToRemoveEvent.emit(project);
  }
}
