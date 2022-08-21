import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { SocialNetComponent } from './components/social-net/social-net.component';
import { BannerModule } from './banner/banner.module';
import { PrincipalInfoModule } from './principal-info/principal-info.module';
import { AppRoutingModule } from './app-routing-module/app-routing-module.ts.module';
import { SkillsInfoModule } from './skills-info/skills-info.module';
import { ProjectsModule } from './projects/projects.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    SocialNetComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BannerModule,
    PrincipalInfoModule,
    AppRoutingModule,
    SkillsInfoModule,
    ProjectsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
