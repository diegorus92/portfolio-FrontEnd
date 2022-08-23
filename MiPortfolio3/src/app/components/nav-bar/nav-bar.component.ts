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
  socialNetToModify!:ISocialNetwork;

  ngOnInit(): void {
    
  }

  //Agrega el ISocialNetwork proveniente del hijo (SocialNetFormComponent) a la lista de ISocialNetwork[] del service
  //Recarga la lista de ISocialNetwork[] del service en la lista de este componente
  //Resetea el socialNetToModify
  addSocialNetwork(socialNet: ISocialNetwork): void {
    this.socialNetService.addSocialNetwork(socialNet);
    console.log("[Nav-bar]Agregado a lista del servicio ", socialNet);
    this.socialNetList = this.socialNetService.SocialNetList;
    console.log("[Nav-bar]Recargada lista de Redes actualizada desde el servicio");

    /*borro la variable this.socialNetToModify
      para que al añadir nueva red no me siga modificando la red modificada anteriormente,
      o si quiero modificar una nueva red, no me modifique la anterior
    */
    let emptySocialNet!:ISocialNetwork;
    this.socialNetToModify = emptySocialNet;
    ////////////////////////////////////
    
    console.log("[Nav-bar] socialNetToModify, ", this.socialNetToModify);
  }

  toogleForm():void{
    this.formActive = !this.formActive;
  }

  /*Recibe la red social del hijo y la guarda en una ISocialNetwork en este componente 
  que será enviada al form a modificar en la lista del servicio. 
  Cambia el estado del formActive para mostrar u ocultar el formulario*/
  modifySocialNetIncoming(socialNet: ISocialNetwork):void{
    console.log("[Nav-bar]Red social a modificar traída desde hijo (Form):", socialNet);
    this.socialNetToModify = socialNet;
    this.formActive = !this.formActive;
  }

  /*Toma la red social a eliminar y la pasa al servicio para su eliminación,
  luego recarga la lista de redes sociales mediante la lista del servicio*/
  removeSocialNetIncoming(socialNet: ISocialNetwork):void{
    console.log("[Nav-bar] ID de la SocialNet a eliminar recibido: ", socialNet.id);
    this.socialNetService.removeSocialNetwork(socialNet);
    this.socialNetList = this.socialNetService.SocialNetList;
    console.log("[Nav-bar] Recargada lista de Redes actualizada desde el servicio ", this.socialNetList);
  }
}
