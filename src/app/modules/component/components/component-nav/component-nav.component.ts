import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-component-nav',
  templateUrl: './component-nav.component.html',
  styleUrls: ['./component-nav.component.scss']
})
export class ComponentNavComponent {

  activatedRoute!: string;

  constructor(
    private renderer: Renderer2,
    private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.activatedRoute = val.urlAfterRedirects;
      }
    });
  }

  goComponent(path:string) {
    this.router.navigateByUrl(path);
  }
  
  routes = [
    { path: '/components/autocomplete', title: 'Autocomplete' },
    { path: '/components/badge', title: 'Badge' },
    { path: '/components/bottom-sheet', title: 'Bottom Sheet' },
    { path: '/components/buttons', title: 'Button' },
    { path: '/components/button-toggle', title: 'Button toggle' },    
    { path: '/components/carousel', title: 'Carousel' },
    { path: '/components/card', title: 'Card' },
    { path: '/components/checkbox', title: 'Checkbox' },
    { path: '/components/chips', title: 'Chips' },
    { path: '/components/core', title: 'Core' },
    { path: '/components/datepicker', title: 'Datepicker' },
    { path: '/components/dialog', title: 'Dialog' },
    { path: '/components/divider', title: 'Divider' },
    { path: '/components/expansion', title: 'Expansion Panel' },
    { path: '/components/form-field', title: 'Form field' },
    { path: '/components/grid', title: 'Grid' },
    { path: '/components/icon', title: 'Icon' },
    { path: '/components/input', title: 'Input' },
    { path: '/components/list', title: 'List' },
    { path: '/components/menu', title: 'Menu' },
    { path: '/components/paginator', title: 'Paginator' },
    { path: '/components/progress-bar', title: 'Progress bar' },
    { path: '/components/progress-spinner', title: 'Progress spinner' },
    { path: '/components/radio', title: 'Radio button' },
    { path: '/components/ripple', title: 'Ripples' },
    { path: '/components/select', title: 'Select' },
    { path: '/components/sidenav', title: 'Sidenav' },
    { path: '/components/signature', title: 'Signature' },
    { path: '/components/slide-toggle', title: 'Slide toggle' },
    { path: '/components/slider', title: 'Slider' },
    { path: '/components/snack-bar', title: 'Snackbar' },
    { path: '/components/sort', title: 'Sort header' },
    { path: '/components/stepper', title: 'Stepper' },
    { path: '/components/switch', title: 'Switch' },
    { path: '/components/table', title: 'Table' },
    { path: '/components/tabs', title: 'Tabs' },
    { path: '/components/tags', title: 'Tags' },
    { path: '/components/toolbar', title: 'Toolbar' },
    { path: '/components/tooltip', title: 'Tooltip' },
    { path: '/components/tree', title: 'tree' }
  ];

  ngOnInit() {
  }

  toggleMenuItem(element: any, classes: string) {
    classes.indexOf('active') < 0 ? this.renderer.addClass(element, 'active') :
      this.renderer.removeClass(element, 'active');
  }

  checkActivatedRoute(route: string) {
    if (this.activatedRoute &&
      route === '/components/input' &&
      this.activatedRoute === '/components/input-number') {
      return false;
    }
    return !this.activatedRoute ? false : this.activatedRoute.indexOf(route) >= 0;
  }

}
