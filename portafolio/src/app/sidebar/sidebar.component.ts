import { Component, OnInit } from '@angular/core';
import { faCircleArrowDown, faUser, faUserGraduate, faCode, faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faCircleArrowDown = faCircleArrowDown;
  faUser= faUser;
  faUserGraduate= faUserGraduate;
  faCode = faCode;
  faBriefcase=faBriefcase;
  
  constructor() { }

  ngOnInit(): void {
  }

}
