import { Component, Input, OnInit } from '@angular/core';
import { faSquarePen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { IEducation } from 'src/app/interfaces/education-item';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {

  constructor() { }

  editIcon = faSquarePen;
  removeIcon = faTrashCan;
  @Input() education:IEducation = {
    startDateYear: "2000",
    endDateYear: "2005",
    city: "San Francisco",
    country: "United States",
    degree: "Sistems Engineer",
    institution: "University of San Francisco"
  }

  ngOnInit(): void {
  }

}
