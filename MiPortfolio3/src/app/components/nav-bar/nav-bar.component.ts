import { Component, OnInit } from '@angular/core';
import { faCoffee, faSquarePen, faUser} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  editIcon = faSquarePen;
  faceIcon = faFacebook;
  instaIcon = faSquareInstagram;
  linkedinIncon = faLinkedin;
  tweetIcon = faSquareTwitter;
  userIcon = faUser;
  

  constructor() { }

  ngOnInit(): void {
  }

}
