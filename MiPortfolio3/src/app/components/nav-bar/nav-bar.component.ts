import { Component, OnInit } from '@angular/core';
import { faSquarePen} from '@fortawesome/free-solid-svg-icons';
import { ISocialNetwork } from '../../interfaces/social-network';
import { SocialNetworkService } from 'src/app/services/social-network.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  editIcon = faSquarePen;
  

  constructor(private socialNetService: SocialNetworkService) { }

  socialNetList:ISocialNetwork[] = this.socialNetService.SocialNetList;

  ngOnInit(): void {
    
  }

}
