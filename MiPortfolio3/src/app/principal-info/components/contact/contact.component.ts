import { Component, OnInit } from '@angular/core';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { IContactItem } from 'src/app/interfaces/contact-item';
import { PrincipalInfoService } from 'src/app/services/principal-info.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private principalInfoService: PrincipalInfoService) { }

  addIcon = faPlus;
  contactItems:IContactItem[] = this.principalInfoService.ContactItems;

  ngOnInit(): void {
  }

}
