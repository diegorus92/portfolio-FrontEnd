import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';
import { IEducation } from 'src/app/interfaces/education-item';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private principalInfoService: PrincipalInfoService) { }

  addIcon = faPlus;
  educationItems:IEducation[] = this.principalInfoService.EducationItems;

  ngOnInit(): void {
  }

}
