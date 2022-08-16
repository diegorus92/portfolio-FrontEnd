import { Injectable } from '@angular/core';
import { ProfilePicture } from '../../assets/mocks-lists/MockProfilePicture'
import { IProfilePicture } from '../interfaces/profile-picture';
import { ContactItems } from 'src/assets/mocks-lists/MockContactItem';
import { IContactItem } from '../interfaces/contact-item';
import { ISoftwareItem } from '../interfaces/software-item';
import { SoftwareItems } from 'src/assets/mocks-lists/MockSoftwareItems';

@Injectable({
  providedIn: 'root'
})
export class PrincipalInfoService {

  constructor() { }

  private profilePicture:IProfilePicture = ProfilePicture;
  private contactItems:IContactItem[] = ContactItems;
  private softwareItems:ISoftwareItem[] = SoftwareItems;

  get ProfilePicture():IProfilePicture {
    return this.profilePicture;
  }

  get ContactItems():IContactItem[] {
    return this.contactItems;
  }

  get SoftwareItems():ISoftwareItem[]{
    return this.softwareItems;
  }
}
