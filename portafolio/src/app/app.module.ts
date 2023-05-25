import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CubeComponent } from './cube/cube.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { EducationComponent } from './pages/education/education.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedService } from 'src/services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CubeComponent,
    AboutMeComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
