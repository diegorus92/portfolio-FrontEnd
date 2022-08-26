import { Injectable } from '@angular/core';
import { ProfilePicture } from '../../assets/mocks-lists/MockProfilePicture'
import { IProfilePicture } from '../interfaces/profile-picture';
import { ContactItems } from 'src/assets/mocks-lists/MockContactItem';
import { IContactItem } from '../interfaces/contact-item';
import { ISoftwareItem } from '../interfaces/software-item';
import { SoftwareItems } from 'src/assets/mocks-lists/MockSoftwareItems';
import { IReference } from '../interfaces/reference';
import { ReferenceData } from 'src/assets/mocks-lists/MockReference';
import { IIdiomItem } from '../interfaces/idiom-item';
import { IdiomItems } from 'src/assets/mocks-lists/MockIdiomItems';
import { UserData } from '../interfaces/user';
import { UserInfo } from 'src/assets/mocks-lists/MockUserData';
import { IProfessionalExpItem } from '../interfaces/professional-exp-item';
import { ProfessionalExpItems } from 'src/assets/mocks-lists/MockProfessionalItems';
import { IEducation } from '../interfaces/education-item';
import { EducationItems } from 'src/assets/mocks-lists/MockEducationItems';
import { IInterest } from '../interfaces/interest-item';
import { Interests } from 'src/assets/mocks-lists/MockInterests';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faMobileScreenButton, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class PrincipalInfoService {

  constructor() { }

  private profilePicture:IProfilePicture = ProfilePicture;
  
  private contactItems:IContactItem[] = ContactItems;
  private contactIcons: IconDefinition[] = [faEnvelope, faMobileScreenButton, faPhone, faLocationDot];

  private softwareItems:ISoftwareItem[] = SoftwareItems;
  private reference:IReference = ReferenceData;
  private idioms:IIdiomItem[] = IdiomItems;
  private userInfo: UserData = UserInfo;
  private professionalExpItems: IProfessionalExpItem[] = ProfessionalExpItems;
  private educationItems: IEducation[] = EducationItems;
  private interests:IInterest[] = Interests;

  get ProfilePicture():IProfilePicture {
    return this.profilePicture;
  }

  get ContactItems():IContactItem[] {
    this.setContactIcon();
    return this.contactItems;
  }

  get SoftwareItems():ISoftwareItem[]{
    return this.softwareItems;
  }

  get ReferenceData():IReference {
    return this.reference;
  }

  get Idioms():IIdiomItem[]{
    return this.idioms;
  }

  get UserInfo():UserData {
    return this.userInfo;
  }

  get PorfessionalExpItems():IProfessionalExpItem[]{
    return this.professionalExpItems;
  }

  get EducationItems():IEducation[]{
    return this.educationItems;
  }

  get Interests():IInterest[]{
    return this.interests;
  }


  saveProfilePicture(url:string):void{
    this.ProfilePicture.imageSrc = url;
    console.log("[PrincipalInfoService] url recibida del PrincipalInfoComponent y almacenada: ", url);
  }


  private setContactIcon():void{
    for(let i = 0; i < this.contactItems.length; i++) {
      this.findIcon(this.contactItems[i]);
    }
  }

  private findIcon(contactItem:IContactItem):void{
    switch(contactItem.iconName){
      case "envelope":{
        contactItem.icon = this.contactIcons[0];
        break;
      }
      case "mobile":{
        contactItem.icon = this.contactIcons[1];
        break;
      }
      case "phone":{
        contactItem.icon = this.contactIcons[2];
        break;
      }
      case "location":{
        contactItem.icon = this.contactIcons[3];
        break;
      }
      default: break;
    }
  }

  private setContactId():number{
    return this.contactItems.length > 0 ? Math.max(...this.contactItems.map(contact => contact.id!)) + 1 : 1;
  }

  private findContact(contact:IContactItem):number{
    return this.contactItems.findIndex(item => item.id==contact.id);
  }

  saveContact(contact:IContactItem):void{
    let contactIndex = this.findContact(contact);
    if(contactIndex > -1){
      this.contactItems[contactIndex] = contact;
      console.log("[PrincipalInfoService] contacto modificado en índice: ", contactIndex);
    }
    else{
      contact.id = this.setContactId();
      this.contactItems.push(contact);
      console.log("[PrincipalInfoService] nuevo contacto almacenado: ", contact);
    }
  }

  removeContact(contact:IContactItem):void{
    console.log("[PrincipalInfoService] id del contacto a eliminar: ", contact.id);
    this.contactItems.splice(this.findContact(contact), 1);
    console.log("[PrincipalInfoService] Contacto eliminado: ", contact);
  }

}
