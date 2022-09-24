import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggleTheme() {
    this._themeService.toggle();
  }
}
