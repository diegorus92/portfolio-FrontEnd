import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { NgChartsModule } from 'ng2-charts';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SkillsComponent,
    SkillsSectionComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    FontAwesomeModule
  ],
  exports: [
    SkillsComponent,
    SkillsSectionComponent,
  ]
})
export class SkillsInfoModule { }
