import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillSectionComponent } from './components/skill-section/skill-section.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    SkillSectionComponent,
    SkillItemComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    SkillSectionComponent
  ]
})
export class SkillsModule { }
