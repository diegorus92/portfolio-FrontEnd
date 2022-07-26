import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSquarePen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { IProfessionalExpItem } from 'src/app/interfaces/professional-exp-item';

@Component({
  selector: 'app-professional-exp-item',
  templateUrl: './professional-exp-item.component.html',
  styleUrls: ['./professional-exp-item.component.css']
})
export class ProfessionalExpItemComponent implements OnInit {

  constructor() { }

  editIcon = faSquarePen;
  removeIcon = faTrashCan;
  @Input()professionalExp:IProfessionalExpItem = {
    startDate: "01/01/1998",
    endDate: "02/02/2001",
    city: "Jujuy",
    country: "Argentina",
    enterpriseName: "CHevrolette Company",
    position: "Sales",
    description: "Lorem Ipsum is simply dummy text of the printing. and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived"
  }
  @Output() professionalItemEvent = new EventEmitter<IProfessionalExpItem>();
  @Output() professionalItemToDeleteEvent = new EventEmitter<IProfessionalExpItem>();

  ngOnInit(): void {
  }

  professionalItemEmit(professionalItem:IProfessionalExpItem):void{
    this.professionalItemEvent.emit(professionalItem);
  }

  professionalItemToDeleteEmit(professionalItem:IProfessionalExpItem):void{
    this.professionalItemToDeleteEvent.emit(professionalItem);
  }
}
