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

@Injectable({
  providedIn: 'root'
})
export class PrincipalInfoService {

  constructor() { }

  private profilePicture:IProfilePicture = ProfilePicture;
  private contactItems:IContactItem[] = ContactItems;
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

}
