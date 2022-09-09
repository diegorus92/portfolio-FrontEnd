import { Injectable } from '@angular/core';
import { ISkill } from '../interfaces/skill';
import { HardSkills, SoftSkills } from 'src/assets/mocks-lists/MockSkills';

const HARDSKILLSID = 1;
const SOFTSKILLSID = 2

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  private hardSkills: ISkill = HardSkills;
  private softSkills: ISkill = SoftSkills;


  get HardSkills(): ISkill{
    return this.hardSkills;
  }

  get SoftSkills(): ISkill{
    return this.softSkills;
  }

  modifyHardSkillsData(hardSkillsData:number[]){
    this.HardSkills.datasets[0].data = hardSkillsData;
    console.log("[SkillSevice] Modificado valores de HardSkills:", this.hardSkills);
  }
}
