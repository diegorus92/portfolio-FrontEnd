import { Component, Input, OnInit } from '@angular/core';
import { ISocialNetwork } from 'src/app/interfaces/social-network';
import { faFacebook, faLinkedin, faSquareInstagram, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faF } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-net',
  templateUrl: './social-net.component.html',
  styleUrls: ['./social-net.component.css']
})
export class SocialNetComponent implements OnInit {

  constructor() { }

  @Input() socialNet: ISocialNetwork={
    id:1,
    iconName: "facebook",
    link:"#"
  };
  
  ngOnInit(): void {
    
  }


}
