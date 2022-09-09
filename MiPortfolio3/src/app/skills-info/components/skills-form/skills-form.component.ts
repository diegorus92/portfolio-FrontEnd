import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISkill } from 'src/app/interfaces/skill';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input() hardSkills!:ISkill;

  hardSkillsDataForm: FormGroup = this.formBuilder.group({
    data1: [ 0, [Validators.required]],
    data2: [ 0, [Validators.required]],
    data3: [ 0, [Validators.required]],
    data4: [ 0, [Validators.required]],
    data5: [ 0, [Validators.required]],
    data6: [ 0, [Validators.required]],
  })  

  @Output() hardSkillsDataEvent = new EventEmitter<number[]>();

  ngOnInit(): void {
  }

  toList(skillsData:any):number[] {
    let list:number[] = [];

    list.push(skillsData.data1);
    list.push(skillsData.data2);
    list.push(skillsData.data3);
    list.push(skillsData.data4);
    list.push(skillsData.data5);
    list.push(skillsData.data6);

    return list;
  }

  onSend(event:Event): void {
    event.preventDefault();

    if(this.hardSkillsDataForm.valid){
      console.log("[SkillsFormComponent] datos captados en form", this.hardSkillsDataForm.value);
      this.hardSkillsDataEmitter(this.toList(this.hardSkillsDataForm.value));
    }
    else{
      alert("[SkillsFormComponent] Todos los campos deben llenarse");
    }
  }

  hardSkillsDataEmitter(skillsData:number[]):void{
    this.hardSkillsDataEvent.emit(skillsData);
  }
}
