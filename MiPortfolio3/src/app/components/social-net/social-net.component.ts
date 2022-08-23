import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faSquarePen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ISocialNetwork } from 'src/app/interfaces/social-network';

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
  editIcon = faSquarePen;
  removeIcon = faTrashCan;

  @Output() socialNetEvent = new EventEmitter<ISocialNetwork>();
  
  ngOnInit(): void {
    
  }

  /*Al presionar el icono de editIcon de este componente, se envía mediante el evento la info
  de la Red social al padre (NavBarComponent)*/
  modifySocialNetwork(socialNetwork: ISocialNetwork): void {
    this.socialNetEvent.emit(socialNetwork);
  }

}
