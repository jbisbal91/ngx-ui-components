import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Drawer } from 'ngx-eagle/drawer';
import { filter } from 'rxjs';
import { ComponentNavComponent } from './components/component-nav/component-nav.component';

@Component({
  selector: 'app-components-root',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  activatedRouteName: string = '';

  constructor(private router: Router, private titleService: Title, private drawer:Drawer) {}

  ngOnInit(): void {
    this.activatedRouteName = this.titleService
      .getTitle()
      .replace(' | NGX-EAGLE', '');
    this.setRouteName();
  }

  setRouteName() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects;
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
    this.drawer.open(ComponentNavComponent,{
      placement: 'left',
      closeDesktop: true,
    });
  }
}
