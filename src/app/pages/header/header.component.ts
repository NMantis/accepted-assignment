import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  showBtn: boolean;
  private destroyed$ = new Subject();

  constructor(
    private _themeService: ThemeService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        takeUntil(this.destroyed$),
        filter(event => event instanceof NavigationEnd),
      ).subscribe(event =>
        this.showBtn = (event as NavigationEnd).url.includes('preview')
      );
  }

  toggleTheme() {
    this._themeService.toggle();
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
