import { Injectable } from '@angular/core';
import { ProfilePicture } from '../../assets/mocks-lists/MockProfilePicture'
import { IProfilePicture } from '../interfaces/profile-picture';

@Injectable({
  providedIn: 'root'
})
export class PrincipalInfoService {

  constructor() { }

  private profilePicture:IProfilePicture = ProfilePicture;

  get ProfilePicture():IProfilePicture {
    return this.profilePicture;
  }
}
