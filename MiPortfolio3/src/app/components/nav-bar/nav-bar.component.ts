import { Component, OnInit } from '@angular/core';
import { faSquarePen} from '@fortawesome/free-solid-svg-icons';
import { SocialNetList } from 'src/assets/mocks-lists/MockSocialNets';
import { ISocialNetwork } from '../../interfaces/social-network';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  editIcon = faSquarePen;
  

  constructor() { }

  socialNetList:ISocialNetwork[] = SocialNetList;

  ngOnInit(): void {
    
  }

}
