import { Component, OnInit } from '@angular/core';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { UserData } from 'src/app/interfaces/user';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private principalInfoService: PrincipalInfoService) { }

  editIcon = faSquarePen;

  userData: UserData = this.principalInfoService.UserInfo;

  ngOnInit(): void {
  }

}
