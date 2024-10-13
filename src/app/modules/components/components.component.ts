import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Drawer } from 'ngx-eagle/drawer';
import { filter } from 'rxjs';
import { ComponentNavComponent } from './components/component-nav/component-nav.component';
import { ContributorsService } from 'src/app/shared/services/contributors/contributors.service';

@Component({
  selector: 'app-components-root',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  activatedRouteName: string = '';
  showContributors: boolean = false;

  constructor(private router: Router, private titleService: Title, private drawer: Drawer, public contributorsService: ContributorsService) {
  }

  ngOnInit(): void {
    this.activatedRouteName = this.titleService
      .getTitle()
      .replace(' | NGX-EAGLE', '');
    this.setRouteName();
    if(this.router.url !== '/components/categories') {
      this.showContributors = true;
    }
  }

  setRouteName() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects;
        this.showContributors = url !== '/components/categories';
        const urlParts = url.split('/').filter((part: any) => part !== '');
        this.activatedRouteName = this.capitalizeFirstLetter(
          urlParts[urlParts.length - 1]
        ).replace(/-/g, " ");
      });
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  openSideBar() {
    this.drawer.open(ComponentNavComponent, {
      placement: 'left',
      closeDesktop: true,
    });
  }
}
