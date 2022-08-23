import { Injectable } from '@angular/core';
import { SocialNetList } from '../../assets/mocks-lists/MockSocialNets'
import { ISocialNetwork } from '../interfaces/social-network';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFacebook,faLinkedin, faSquareInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class SocialNetworkService {

  constructor() { }

  private socialNetList:ISocialNetwork[] = SocialNetList;
  private icons: IconDefinition[] = [faFacebook, faLinkedin, faSquareInstagram, faTwitter, faYoutube];


  get SocialNetList(): ISocialNetwork[] {
    this.setIcon();
    return this.socialNetList;
  };


  //Recorre la lista de ISocialNetwork, y se le asigna a cada item su correspondiente IconDefinition
  private setIcon():void{
    for(let i = 0; i < this.socialNetList.length; i++) {
      this.findIcon(this.socialNetList[i]);
    }
  }

  /*Recibe un ISocialNetwork y segun el nombre, le asigna el IconDefinition correspondiente
  dentro de la lista de IconDefinition*/
  private findIcon(socialNetList:ISocialNetwork):void{ 
    switch(socialNetList.iconName){
      case "facebook":{
        socialNetList.icon = this.icons[0];
        break;
      }
      case "linkedin":{
        socialNetList.icon = this.icons[1];
        break;
      }
      case "instagram":{
        socialNetList.icon = this.icons[2];
        break;
      }
      case "twitter":{
        socialNetList.icon = this.icons[3];
        break;
      }
      case "youtube":{
        socialNetList.icon = this.icons[4];
        break;
      }
      default: break;
    }
  }

  private setId():number{
    return this.SocialNetList.length > 0 ? Math.max(...this.SocialNetList.map(item => item.id!)) + 1 : 1;
  }

  private findSocialNet(socialNet: ISocialNetwork):number{
    return this.SocialNetList.findIndex(item => item.id == socialNet.id);
  }


  addSocialNetwork(newSocialNet:ISocialNetwork):void{
    let socialNetIndex = this.findSocialNet(newSocialNet);
    if(socialNetIndex > -1){
      this.socialNetList[socialNetIndex] = newSocialNet;
      console.log("[servicio]: Modificando Red en indice ", socialNetIndex);
      console.log("[servicio]:Red modificada con éxito ", this.socialNetList);
    }
    else{
      newSocialNet.id = this.setId();
      console.log("[servicio]: Añadiendo id a nueva Red", newSocialNet);
      this.socialNetList.push(newSocialNet);
      console.log("[servicio]:Red agregada con éxito ", this.socialNetList);
    }
  }

  /*Elimina de la lista una red social recibida por parámetro, mediante su ID */
  removeSocialNetwork(socialNet:ISocialNetwork):void{
    console.log("[servicio] id de la red social a eliminar: ", socialNet.id);
    this.SocialNetList.splice(this.findSocialNet(socialNet), 1);
    console.log("[servicio] Red social eliminada: ", socialNet);
  }
}
