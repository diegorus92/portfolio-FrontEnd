import { Component, Input, OnInit } from '@angular/core';
import { IContactItem } from 'src/app/interfaces/contact-item';
import { faEnvelope, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  constructor() { }

  @Input()contactItem: IContactItem = {
    faIcon: faEnvelope,
    data: "miCorreoFalso@hotmail.com"
  }

  faEdit = faPenToSquare;
  faRemove = faTrashCan;

  ngOnInit(): void {
  }

}
