import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isHandset$: Observable<boolean>;
  public imagePath5 = '../../../assets/images/kapa-logo.png';
  title = 'soko';
  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$=this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  }
  ngOnInit(): void {
   
  }
}
