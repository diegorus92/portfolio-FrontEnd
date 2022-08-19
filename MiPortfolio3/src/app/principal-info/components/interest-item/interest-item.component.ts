import { Component, Input, OnInit } from '@angular/core';
import { faSquarePen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { IInterest } from 'src/app/interfaces/interest-item';

@Component({
  selector: 'app-interest-item',
  templateUrl: './interest-item.component.html',
  styleUrls: ['./interest-item.component.css']
})
export class InterestItemComponent implements OnInit {

  constructor() { }

  editIcon = faSquarePen;
  removeIcon = faTrashCan;
  @Input() interest:IInterest = {
    label: "Jugar",
    description: "Lorem Ipsum is simply dummy text of the printing"
  }

  ngOnInit(): void {
  }

}
