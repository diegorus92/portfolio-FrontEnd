import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IContactItem } from 'src/app/interfaces/contact-item';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  constructor() { }

  @Input()contactItem: IContactItem = {
    iconName: "envelope",
    data: "miCorreoFalso@hotmail.com"
  }
 editionActive:boolean = false;
 @Output() editionContactEvent = new EventEmitter<IContactItem>();
 @Output() removeContactEvent = new EventEmitter<IContactItem>();

  faEdit = faPenToSquare;
  faRemove = faTrashCan;

  ngOnInit(): void {
  }

  toggleEdition():void{
    this.editionContactEvent.emit(this.contactItem);
  }

  removeContact():void{
    this.removeContactEvent.emit(this.contactItem);
  }
}
