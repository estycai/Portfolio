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
    { img: 'assets/img/logos/c.png', title: 'C#', porcentaje: 60 },
    { img: 'assets/img/logos/net.png', title: '.NET', porcentaje: 60 },
    { img: 'assets/img/logos/sql.png', title: 'SQL', porcentaje: 60 },
    { img: 'assets/img/logos/html.png', title: 'HTML', porcentaje: 90 },
    { img: 'assets/img/logos/css.png', title: 'CSS', porcentaje: 80 },
    { img: 'assets/img/logos/js.png', title: 'Javascript', porcentaje: 50 },
    { img: 'assets/img/logos/java.png', title: 'JAVA', porcentaje: 50 },
    { img: 'assets/img/logos/spring.png', title: 'Spring', porcentaje: 50 },
    { img: 'assets/img/logos/git.png', title: 'Git', porcentaje: 50 },
  ];

  habilidadesAux:Skill[] = this.habilidades;

  txtBusquedaRapida: string = "";
  constructor() {}

  ngOnInit(): void {
    
  }

  busquedaRapida(){
    this.habilidadesAux = this.habilidades.filter(x => x.title.toLowerCase().includes(this.txtBusquedaRapida.toLowerCase()))
  }
}
