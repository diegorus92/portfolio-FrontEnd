import { Component, Input, OnInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import { ISkill } from 'src/app/interfaces/skill-item';

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
    value: 50
  }

  ngOnInit(): void {
  }

}
