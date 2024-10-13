import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ThemeService } from './shared/services/theme/theme.service';
import { ContributorsService } from './shared/services/contributors/contributors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'NGX-EAGLE';
  previousUrl: string = '';

  constructor(
    private titleService: Title,
    private router: Router,
    private themeService: ThemeService,
    private contributorsService: ContributorsService
  ) {}

  ngOnInit(): void {
    this.getContributors();
    this.setTitle();
    this.themeService.initTheme();
  }

  getContributors() {
    this.contributorsService.getContributors();
  }

  setTitle() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects;
        if (this.previousUrl !== url) {
          this.previousUrl = url;
          window.scrollTo(0, 0);
        }
        const urlParts = url.split('/').filter((part: any) => part !== '');
        this.title =
          urlParts.length === 1
            ? 'NGX-EAGLE | Angular UI component library'
            : this.capitalizeFirstLetter(urlParts[urlParts.length - 1]).replace(
                /-/g,
                ' '
              ) + ' | NGX-EAGLE';
        this.titleService.setTitle(this.title);
      });
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
