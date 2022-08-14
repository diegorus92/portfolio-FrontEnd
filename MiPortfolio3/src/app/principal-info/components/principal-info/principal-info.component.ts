import { Component, OnInit } from '@angular/core';
import { IProfilePicture } from 'src/app/interfaces/profile-picture';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';

@Component({
  selector: 'app-principal-info',
  templateUrl: './principal-info.component.html',
  styleUrls: ['./principal-info.component.css']
})
export class PrincipalInfoComponent implements OnInit {

  constructor(private PrincipalInfoService: PrincipalInfoService) { }

  profilePicture:IProfilePicture = this.PrincipalInfoService.ProfilePicture;

  ngOnInit(): void {
  }

}
