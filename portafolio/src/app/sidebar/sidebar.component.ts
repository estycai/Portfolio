import { Component, OnInit } from '@angular/core';
import { faCircleArrowDown, faUser, faUserGraduate, faCode, faBriefcase } from '@fortawesome/free-solid-svg-icons';

import { SharedService } from 'src/services/shared.service';

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

  isMobile!: boolean;

  constructor(private sharedService: SharedService){ }

  ngOnInit(): void {
    this.sharedService.isMobile().subscribe(x => {this.isMobile = x.matches});
  }

}
