import { Component, OnInit } from '@angular/core';
import { ISkill } from 'src/app/interfaces/skill-item';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.css']
})
export class SkillSectionComponent implements OnInit {

  hardSkills:ISkill[] = [];
  softSkills:ISkill[] = [];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.hardSkills = this.skillService.HardSkills;
    this.softSkills = this.skillService.SoftSkills;
  }

}
