import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
