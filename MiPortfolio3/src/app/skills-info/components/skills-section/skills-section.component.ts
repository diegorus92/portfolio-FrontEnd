import { Component, OnInit } from '@angular/core';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { ISkill } from 'src/app/interfaces/skill';
import { SkillService } from 'src/app/services/skill.service';
import { HardSkills, SoftSkills } from 'src/assets/mocks-lists/MockSkills';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {

  constructor(private skillService: SkillService) { }

  editIcon = faSquarePen;

  hardSkills:ISkill = this.skillService.HardSkills;
  softSkills:ISkill = this.skillService.SoftSkills;

  formActive:boolean = false;


  ngOnInit(): void {
  }

  toggleForm(): void {
    this.formActive = !this.formActive;
  }

  hardSkillsDataRecived(hardSkillsData:number[]):void{
    console.log("[SkillsSectionComponent] datas HardSkills recibido del form: ", hardSkillsData);
    this.skillService.modifyHardSkillsData(hardSkillsData);
    this.hardSkills = this.skillService.HardSkills;
    this.formActive = false;
  }
}
