import { Component, Input, OnInit } from '@angular/core';
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


  ngOnInit(): void {
  }


}
