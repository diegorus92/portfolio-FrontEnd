import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { NgChartsModule } from 'ng2-charts';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsFormComponent } from './components/skills-form/skills-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SkillsComponent,
    SkillsSectionComponent,
    SkillsFormComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SkillsComponent,
    SkillsSectionComponent,
  ]
})
export class SkillsInfoModule { }
