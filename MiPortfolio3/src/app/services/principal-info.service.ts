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

const referenceId:number = 1;

@Injectable({
  providedIn: 'root'
})
export class PrincipalInfoService {

  constructor() { }

  private profilePicture:IProfilePicture = ProfilePicture;
  
  private contactItems:IContactItem[] = ContactItems;
  private contactIcons: IconDefinition[] = [faEnvelope, faMobileScreenButton, faPhone, faLocationDot];

  private softwareItems:ISoftwareItem[] = SoftwareItems;
  private defaultSoftwareOption:string = "option1";

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


  /////////////////PROFILE PICTURE///////////////
  saveProfilePicture(url:string):void{
    this.ProfilePicture.imageSrc = url;
    console.log("[PrincipalInfoService] url recibida del PrincipalInfoComponent y almacenada: ", url);
  }
  /////////////////////////////////////////////

  ////////CONTACTS//////////////////////////
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
  ///////////////////////////////////////

  ///////////SOFTWARES////////////////////////
  private setSoftwareId():number{
    return this.softwareItems.length > 0 ? Math.max(...this.softwareItems.map(soft => soft.id!)) + 1 : 1;
  }

  private findSoftware(software:ISoftwareItem):number{
    return this.softwareItems.findIndex(item => item.id==software.id);
  }

  saveSoftware(software:ISoftwareItem):void{
    software.id = this.setSoftwareId();
    software.value = this.defaultSoftwareOption;

    console.log("[PrincipalInfoService] Nuevo software preparado y listo para  a guardar: ", software);
    this.SoftwareItems.push(software);
    console.log("[PrincipalInfoService] Nuevo software guardado en servicio");
  }

  modifySoftware(software:ISoftwareItem):void{
    console.log("[PrincipalInfoService] Recibido de SoftwaresCompoent soft modificado a guardar: ", software);
    let softwareIndex = this.findSoftware(software);
    this.softwareItems[softwareIndex] = software;
  }

  removeSoftware(software:ISoftwareItem):void{
    this.softwareItems.splice(this.findSoftware(software), 1);
    console.log("[PrincipalInfoService] software eliminado de lista, ", this.softwareItems);
  }
  ////////////////////////////////////////

  /////////////REFERENCE//////////////////
  private setReferenceId():number{
    return referenceId;
  }

  modifyReference(reference:IReference):void{
    console.log("[PrincipalInfoService] Referencia a modificar recibida de ReferenceComponent: ", reference);
    
    reference.id! = this.setReferenceId();
    console.log("[PrincipalInfoService]Agregado de id: ", reference);

    this.reference = reference;
    console.log("[PrincipalInfoService] Modificada referencia con éxito: ", this.reference);
  }
  ///////////////////////////////////////

  //////////////IDIOMS/////////////////////
  private setIdiomId():number{
    return this.Idioms.length > 0 ? Math.max(...this.Idioms.map(idiom => idiom.id!)) + 1 : 1;
  }

  saveIdiom(idiom:IIdiomItem):void{
    console.log("[principalInfoService] Nuevo idioma recibido de IdiomsComponent: ", idiom);

    idiom.id! = this.setIdiomId();
    console.log("[principalInfoService] Agregado id nuevo idioma: ", idiom);

    this.Idioms.push(idiom);
    console.log("[principalInfoService]Nuevo idioma almacenado con éxito: ", this.idioms);
  }

  private findIdiom(idiom:IIdiomItem):number{
    return this.idioms.findIndex(item => item.id === idiom.id);
  }

  modifyIdiom(idiom:IIdiomItem):void{
    let index = this.findIdiom(idiom);
    if(index > -1){
      this.idioms[index].value =  idiom.value.toString();
      console.log("[principalInfoService]Cambiado valor del idiom en indice: ", index);
      console.log("[principalInfoService]: ", this.idioms);
    }
    else{
      console.log("[principalInfoService] No se encuentra el índice del idioma! ", idiom);
    }
  }

  removeIdiom(idiom:IIdiomItem):void{
    this.idioms.splice(this.findIdiom(idiom), 1);
    console.log("[principalInfoService]: Idioma removido con éxito: ", this.idioms);
  }
  //////////////////////////////////////

  //////////////////////USER/////////////////////
  modifyUserData(user:UserData):void{
    console.log("[principalInfoService] Dato de usuario recibido del UserComponent: ", user);
    user.id = this.userInfo.id; //Le copio el id del dato viejo al nuevo, dado que el id siempre será uno
    console.log("[principalInfoService] Agregado ID al Dato de usuario recibido: ", user);
    this.userInfo = user;
    console.log("[principalInfoService] Dato de usuario modificado: ", this.userInfo);
  }
  //////////////////////////////////////////////

  /////////////EXPERIENCIA PROFESIONAL//////////////
  private setExperienceId():number{
    return this.professionalExpItems.length > 0 ? Math.max(...this.professionalExpItems.map(item => item.id!)) + 1 : 1;
  }

  private findProfessionalItem(professionalItem:IProfessionalExpItem):number{
    return this.professionalExpItems.findIndex(item => item.id==professionalItem.id);
  }

  saveExperience(experience:IProfessionalExpItem):void{
    if(experience.id! > -1){
      console.log("[principalInfoService] El item ya existe, se modificará", experience);
      this.modifyProfessionalExpItem(experience);
      console.log("[principalInfoService] Item modificado en lista", this.professionalExpItems);
    }
    else{
      console.log("[principalInfoService]El item no existe, se agregará ID y sumará a lista como nuevo: ", experience);
      experience.id = this.setExperienceId();
      this.professionalExpItems.push(experience);
      console.log("[PrincipalInfoService] agregado ID a nueva experiencia e ingresado a la lista", this.professionalExpItems);
    }
    
  }

  modifyProfessionalExpItem(professionalExp:IProfessionalExpItem):void{
    let index = this.findProfessionalItem(professionalExp);
    if(index > -1){
      this.professionalExpItems[index] = professionalExp;
      console.log("[PrincipalInfoService] modificada experiencia profesional,", this.professionalExpItems);
    }
  }

  deleteProfessionalExp(professionalExp:IProfessionalExpItem):void{
    this.professionalExpItems.splice(this.findProfessionalItem(professionalExp), 1);
    console.log("[PrincipalInfoService] Eliminado:", professionalExp);
    console.log("[PrincipalInfoService] Lista luego de la eliminación", this.professionalExpItems);
  }
  ///////////////////////////////////////////////////

  /////////////////EDUCACIÓN////////////////////////
  private setEducationId():number{
    return this.educationItems.length > 0 ? Math.max(...this.educationItems.map(item => item.id!)) + 1 : 1;
  }

  saveEducation(education:IEducation):void{
    education.id = this.setEducationId();
    console.log("[PrincipalInfoService] agregado ID a la educación: ", education);
    this.educationItems.push(education);
    console.log("[PrincipalInfoService] Agregado a lista: ", this.educationItems);
  }
  /////////////////////////////////////////////////
}
