import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import { ISkill, skillType } from 'src/app/interfaces/skill-item';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css'],
  providers: [NgbProgressbarConfig]
})
export class SkillItemComponent implements OnInit {

  constructor(config: NgbProgressbarConfig) {
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'primary';
    config.height = '25px'
  }

  @Input() skill: ISkill = {
    name: "Habilidad X",
    value: 50,
    type: skillType.HARD
  }

  @Output() editionSkillEvent: EventEmitter<ISkill> = new EventEmitter<ISkill>()

  editIcon = faSquarePen;

  ngOnInit(): void {
  }


  editSkillEmitter(skill:ISkill): void{
    this.editionSkillEvent.emit(skill);
  }
}
