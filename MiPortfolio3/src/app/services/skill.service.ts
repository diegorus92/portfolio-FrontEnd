import { Injectable } from '@angular/core';
import { ISkill } from '../interfaces/skill-item';
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
}
