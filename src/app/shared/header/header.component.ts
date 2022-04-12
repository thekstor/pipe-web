import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDark: boolean = this.isDarkValue();
  isNavbarCollapsed=true;

  constructor() {
    if(this.isDark) {
      document.documentElement.className = 'dark';
    }
   }

  ngOnInit(): void {
  }

  changeTheme(): void {
    document.documentElement.className = this.isDark ? 'light' : 'dark';
    this.isDark = !this.isDark;
  }
  isDarkValue(): boolean {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
