import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IProfessionalExpItem } from 'src/app/interfaces/professional-exp-item';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';

@Component({
  selector: 'app-professional-exp',
  templateUrl: './professional-exp.component.html',
  styleUrls: ['./professional-exp.component.css']
})
export class ProfessionalExpComponent implements OnInit {

  constructor(private principalInfoService: PrincipalInfoService) { }

  addIcon = faPlus;
  professionalExpItems:IProfessionalExpItem[] = this.principalInfoService.PorfessionalExpItems;

  ngOnInit(): void {
  }

}
