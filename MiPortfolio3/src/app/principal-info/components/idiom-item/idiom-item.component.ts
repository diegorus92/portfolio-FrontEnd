import { Component, Input, OnInit } from '@angular/core';
import { faSquarePen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { IIdiomItem } from 'src/app/interfaces/idiom-item';

@Component({
  selector: 'app-idiom-item',
  templateUrl: './idiom-item.component.html',
  styleUrls: ['./idiom-item.component.css']
})
export class IdiomItemComponent implements OnInit {

  constructor() { }

  editIcon = faSquarePen;
  removeIcon = faTrashCan;

  @Input()idiom:IIdiomItem = {
    name: "Mandarin",
    value: "1",
  }


  ngOnInit(): void {
  }

}
