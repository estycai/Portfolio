import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor(private breakpointObserver: BreakpointObserver) {



  }

  isMobile(){
    const customBreakpoint = '(max-width: 600px)';

    return this.breakpointObserver.observe(customBreakpoint);
    // .subscribe(result => {
    //   this.isMobile = result.matches;
    // });
  }
}
