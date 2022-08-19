import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InterestsComponent } from '../principal-info/components/interests/interests.component';
import { AppComponent } from '../app.component';
import { ProfessionalExpComponent } from '../principal-info/components/professional-exp/professional-exp.component';
import { EducationComponent } from '../principal-info/components/education/education.component';


const routes:Routes= [
  {path:'', redirectTo: '/', pathMatch:'full'},
  {path: 'interests', component:InterestsComponent},
  {path: 'experience', component:ProfessionalExpComponent},
  {path: 'education', component:EducationComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
