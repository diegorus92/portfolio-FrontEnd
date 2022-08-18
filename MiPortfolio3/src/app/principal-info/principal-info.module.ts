import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrincipalInfoComponent } from './components/principal-info/principal-info.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { SoftwaresComponent } from './components/softwares/softwares.component';
import { SoftwareItemComponent } from './components/software-item/software-item.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { IdiomsComponent } from './components/idioms/idioms.component';
import { IdiomItemComponent } from './components/idiom-item/idiom-item.component';
import { UserComponent } from './components/user/user.component';
import { ProfessionalExpComponent } from './components/professional-exp/professional-exp.component';
import { ProfessionalExpItemComponent } from './components/professional-exp-item/professional-exp-item.component';



@NgModule({
  declarations: [
    PrincipalInfoComponent,
    ProfileImageComponent,
    ContactComponent,
    ContactItemComponent,
    SoftwaresComponent,
    SoftwareItemComponent,
    ReferenceComponent,
    IdiomsComponent,
    IdiomItemComponent,
    UserComponent,
    ProfessionalExpComponent,
    ProfessionalExpItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    PrincipalInfoComponent
  ]
})
export class PrincipalInfoModule { }
