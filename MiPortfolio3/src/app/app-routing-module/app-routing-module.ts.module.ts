import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InterestsComponent } from '../principal-info/components/interests/interests.component';
import { AppComponent } from '../app.component';


const routes:Routes= [
  {path:'', redirectTo: '/', pathMatch:'full'},
  {path: 'interests', component:InterestsComponent},
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
