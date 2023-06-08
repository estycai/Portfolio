import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../skills.component';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {
  @Input() habilidad!: Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
