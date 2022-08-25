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

  saveProfilePicture(url: string){
    this.PrincipalInfoService.saveProfilePicture(url);
    console.log("[PrincipalInfoComponent] url recibida del hijo (ProfileImageComponent) y enviada al servicio: ", url);
    this.profilePicture = this.PrincipalInfoService.ProfilePicture;
    console.log("[PrincipalInfoComponent]Imagen de perfil actaulizada desde el servicio:", this.profilePicture);
  }

}
