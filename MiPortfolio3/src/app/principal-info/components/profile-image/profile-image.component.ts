import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faSquarePen} from '@fortawesome/free-solid-svg-icons';
import { IProfilePicture } from 'src/app/interfaces/profile-picture';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent implements OnInit {

  editIcon = faSquarePen;
  editionActive:boolean = false;

  constructor() { }

  @Input() profilePicture:IProfilePicture = {
    imageSrc:  "",
    imageAlt:  ""
  }

  input:string = "";
  @Output() urlImageEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  toggleEdition(): void {
    this.editionActive = !this.editionActive;
  }

  clearInput():void{
    this.input = "";
  }

  submit(url:string):void{
    console.log("[ProfileImageComponent] url de la imagen enviada al padre: ", url);
    this.urlImageEvent.emit(url);
    this.clearInput();
  }
}
