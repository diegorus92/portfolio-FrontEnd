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



@NgModule({
  declarations: [
    PrincipalInfoComponent,
    ProfileImageComponent,
    ContactComponent,
    ContactItemComponent,
    SoftwaresComponent,
    SoftwareItemComponent
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
