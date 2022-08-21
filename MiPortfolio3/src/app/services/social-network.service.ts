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

  private setIcon():void{
    for(let i = 0; i < this.socialNetList.length; i++) {
      this.findIcon(this.socialNetList[i]);
    }
  }

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


}
