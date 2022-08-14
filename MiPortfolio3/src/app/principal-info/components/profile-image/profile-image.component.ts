import { Component, OnInit, Input } from '@angular/core';
import { faSquarePen} from '@fortawesome/free-solid-svg-icons';
import { IProfilePicture } from 'src/app/interfaces/profile-picture';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent implements OnInit {

  editIcon = faSquarePen;

  constructor() { }

  @Input() profilePicture:IProfilePicture = {
    imageSrc:  "",
    imageAlt:  ""
  }

  ngOnInit(): void {
  }

}
