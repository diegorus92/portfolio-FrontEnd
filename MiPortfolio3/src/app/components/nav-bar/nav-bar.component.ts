import { Component, OnInit } from '@angular/core';
import { faPlus, faTrashCan, faSquarePen} from '@fortawesome/free-solid-svg-icons';
import { ISocialNetwork } from '../../interfaces/social-network';
import { SocialNetworkService } from 'src/app/services/social-network.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  addIcon = faPlus;
  editIcon = faSquarePen;
  removeIcon = faTrashCan;

  formActive:boolean = false;

  constructor(private socialNetService: SocialNetworkService) { }

  socialNetList:ISocialNetwork[] = this.socialNetService.SocialNetList;

  ngOnInit(): void {
    
  }

  addSocialNetwork(socialNet: ISocialNetwork): void {
    this.socialNetService.addSocialNetwork(socialNet);
    console.log("Agregado a lista del servicio");
    this.socialNetList = this.socialNetService.SocialNetList;
    console.log("Recargada lista de Redes actualizada desde el servicio");
  }

  toogleForm():void{
    this.formActive = !this.formActive;
  }

}
