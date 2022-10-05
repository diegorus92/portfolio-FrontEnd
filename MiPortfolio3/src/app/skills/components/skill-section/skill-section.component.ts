import { Component, OnInit } from '@angular/core';
import { ISkill, skillType} from 'src/app/interfaces/skill-item';
import { SkillService } from 'src/app/services/skill.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.css']
})
export class SkillSectionComponent implements OnInit {

  hardSkills:ISkill[] = [];
  softSkills:ISkill[] = [];

  formSkillActive:boolean = false;
  skillTemp!:ISkill;

  constructor(private skillService: SkillService, private formBuilder:FormBuilder) { }

  skillForm: FormGroup = this.formBuilder.group({
    value:['', [Validators.required]],
  })


  ngOnInit(): void {
    this.hardSkills = this.skillService.HardSkills;
    this.softSkills = this.skillService.SoftSkills;
  }

  get Value(){
    return this.skillForm.get('value');
  }

  skillToEdit(skill: ISkill){
    this.skillTemp = skill;
    console.log(this.skillTemp);
    this.formSkillActive = true;
  }


  onSend(event: Event): void {
    event.preventDefault();

    if(this.skillForm.valid){
      console.log("[SkillSectionComponent]Recibido desde el form",this.skillForm.value);
      this.skillTemp.value = this.skillForm.value.value as number;
      console.log("[SkillSectionComponent] skillTemp modificado en value ", this.skillTemp);
      this.skillService.modifySkill(this.skillTemp);
      this.hardSkills = this.skillService.HardSkills;
      this.softSkills = this.skillService.SoftSkills;
      this.formSkillActive = false;
    }
    else{
      alert("[SkillSectionComponent] Formulario invalido");
      this.skillForm.markAllAsTouched();
    }
  }
}
