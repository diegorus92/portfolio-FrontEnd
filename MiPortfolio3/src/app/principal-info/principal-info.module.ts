import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalInfoComponent } from './components/principal-info/principal-info.component';



@NgModule({
  declarations: [
    PrincipalInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrincipalInfoComponent
  ]
})
export class PrincipalInfoModule { }
