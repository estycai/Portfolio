import { Component, OnInit } from '@angular/core';
export interface Skill {
  img: string;
  title: string;
  porcentaje: number;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  habilidades: Skill[] = [
    { img: 'assets/img/logos/angular.png', title: 'Angular', porcentaje: 70 },
    { img: '', title: 'C#', porcentaje: 60 },
    { img: '', title: 'SQL', porcentaje: 60 },
    { img: '', title: 'HTML', porcentaje: 90 },
    { img: '', title: 'CSS', porcentaje: 80 },
    { img: '', title: 'JS', porcentaje: 50 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
