import { Injectable } from '@angular/core';
import { ISkill } from '../interfaces/skill';
import { HardSkills, SoftSkills } from 'src/assets/mocks-lists/MockSkills';

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
}
