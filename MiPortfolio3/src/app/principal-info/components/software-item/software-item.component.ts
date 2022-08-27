import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPenSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ISoftwareItem } from 'src/app/interfaces/software-item';

@Component({
  selector: 'app-software-item',
  templateUrl: './software-item.component.html',
  styleUrls: ['./software-item.component.css']
})
export class SoftwareItemComponent implements OnInit {

  constructor() { }

  editIcon = faPenSquare;
  removeIcon = faTrashCan;

  @Input() softwareItem:ISoftwareItem = {
    id: 1,
    name: "application",
    value: "option5"
  }

  @Output() softwareItemEvent = new EventEmitter<ISoftwareItem>();
  @Output() softwareItemToRemove = new EventEmitter<ISoftwareItem>();


  ngOnInit(): void {
  }

  sendModifiedSoftwareItem(softwareItem:ISoftwareItem){
    this.softwareItemEvent.emit(softwareItem);
  }

  radioChange(value: string): void {
    console.log("[SoftwareItemComponent] Cambiar radioButton de: ", this.softwareItem, " a ", value);
    this.softwareItem.value = value;
    this.sendModifiedSoftwareItem(this.softwareItem);
  }

  removeSoftware():void {
    this.softwareItemToRemove.emit(this.softwareItem);
  }
}
