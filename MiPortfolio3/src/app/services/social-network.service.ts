import { Injectable } from '@angular/core';
import { SocialNetList } from '../../assets/mocks-lists/MockSocialNets'
import { ISocialNetwork } from '../interfaces/social-network';

@Injectable({
  providedIn: 'root'
})
export class SocialNetworkService {

  constructor() { }

  private socialNetList:ISocialNetwork[] = SocialNetList;

  get SocialNetList(): ISocialNetwork[] {
    return this.socialNetList;
  }
}
