import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() idiomChangedEvent = new EventEmitter<IIdiomItem>();
  @Output() idiomToRemoveEvent = new EventEmitter<IIdiomItem>();

  ngOnInit(): void {
  }

  onChange(idiom:IIdiomItem){
    this.idiomChangedEvent.emit(idiom);
  }

  rangeChanged(){
    console.log("[IdiomItemComponent] Nuevo valor: ", this.idiom.value);
    this.onChange(this.idiom);
  }

  removeIdiom(idiom:IIdiomItem):void{
    this.idiomToRemoveEvent.emit(idiom);
  }
}
