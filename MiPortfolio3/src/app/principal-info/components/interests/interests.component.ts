import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IInterest } from 'src/app/interfaces/interest-item';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  constructor(private principalInfoService: PrincipalInfoService) { }

  addIcon = faPlus;
  interests: IInterest[] = this.principalInfoService.Interests;

  ngOnInit(): void {
  }

}
