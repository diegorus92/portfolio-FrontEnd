import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ISoftwareItem } from 'src/app/interfaces/software-item';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';

@Component({
  selector: 'app-softwares',
  templateUrl: './softwares.component.html',
  styleUrls: ['./softwares.component.css']
})
export class SoftwaresComponent implements OnInit {

  constructor(private principalInfoService: PrincipalInfoService) { }

  addIcon = faPlus;
  softwareItems:ISoftwareItem[] = this.principalInfoService.SoftwareItems;

  ngOnInit(): void {
  }

}
