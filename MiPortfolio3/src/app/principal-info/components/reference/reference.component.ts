import { Component, Input, OnInit } from '@angular/core';
import { faSquarePen} from '@fortawesome/free-solid-svg-icons';
import { IReference } from 'src/app/interfaces/reference';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

  constructor(private principalInfoService: PrincipalInfoService) { }

  editIcon = faSquarePen;
  reference:IReference =  this.principalInfoService.ReferenceData;

  ngOnInit(): void {
  }

}
