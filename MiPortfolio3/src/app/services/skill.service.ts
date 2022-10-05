import { Injectable } from '@angular/core';
import { ISkill, skillType } from '../interfaces/skill-item';
import { HardSkills, SoftSkills } from 'src/assets/mocks-lists/MockSkills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private hardSkills: ISkill[] = HardSkills;
  private softSkills: ISkill[] = SoftSkills;

  constructor() { }

  get HardSkills(): ISkill[] {
    return this.hardSkills;
  }

  get SoftSkills(): ISkill[] {
    return this.softSkills;
  }

  private findSkillItem(skill:ISkill, skillList:ISkill[]):number{
    return skillList.findIndex(item => item.id == skill.id);
  }

  modifySkill(skill: ISkill): void{
    console.log("[SkillService] skill Recibido para modificar: ", skill);
    switch(skill.type){
      case skillType.HARD:{
        let index = this.findSkillItem(skill, this.hardSkills);
        if(index > -1){
          this.hardSkills[index] = skill;
          console.log("[SkillService] Modificado skill en hardSkills", this.hardSkills);
        }
        else{ 
          console.log("[SkillService]Skill no encontrada en hardSkills");
        }
        break;
      }
      case skillType.SOFT:{
        let index = this.findSkillItem(skill, this.softSkills);
        if(index > -1){
          this.softSkills[index] = skill;
          console.log("[SkillService] Modificado skill en softSkills", this.softSkills);
        }
        else{
          console.log("[SkillService]Skill no encontrada en hardSkills");
        }
        
        break;
      }
    }
  }
}
