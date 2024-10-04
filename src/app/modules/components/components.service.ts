import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface NavComponents {
  path: string;
  title: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  constructor() { }

  getComponentList(): Observable<NavComponents[]> {
    const navComponents: NavComponents[] = [
      {
        path: '/components/avatar',
        title: 'Avatar',
        icon: 'account_circle',
      },
      {
        path: '/components/badge',
        title: 'Badge',
        icon: 'ripples',
      },
      {
        path: '/components/button',
        title: 'Button',
        icon: 'buttons_alt',
      },
      {
        path: '/components/carousel',
        title: 'Carousel',
        icon: 'view_carousel',
      },
      {
        path: '/components/card',
        title: 'Card',
        icon: 'cards',
      },
      {
        path: '/components/checkbox',
        title: 'Checkbox',
        icon: 'check_box',
      },
      {
        path: '/components/datepicker',
        title: 'Datepicker',
        icon: 'calendar_month',
      },
      {
        path: '/components/dialog',
        title: 'Dialog',
        icon: 'dialogs',
      },
      {
        path: '/components/divider',
        title: 'Divider',
        icon: 'view_day',
      },
      {
        path: '/components/drawer',
        title: 'Drawer',
        icon: 'bottom_drawer',
      },
      {
        path: '/components/dropdown',
        title: 'Dropdown',
        icon: 'dropdown',
      },
      {
        path: '/components/expansion',
        title: 'Expansion Panel',
        icon: 'density_medium',
      },
      {
        path: '/components/grid',
        title: 'Grid',
        icon: 'grid_on',
      },
      {
        path: '/components/image-cropper',
        title: 'Image Cropper',
        icon: 'crop',
      },
      {
        path: '/components/input',
        title: 'Input',
        icon: 'rectangle',
      },
      {
        path: '/components/loading',
        title: 'loading',
        icon: 'emergency',
      },
      {
        path: '/components/paginator',
        title: 'Paginator',
        icon: 'page_control',
      },
      {
        path: '/components/progress',
        title: 'Progress',
        icon: 'progress_activity',
      },
      {
        path: '/components/rate',
        title: 'Rate',
        icon: 'star_rate',
      },
      {
        path: '/components/resize',
        title: 'Resize',
        icon: 'resize',
      },
      {
        path: '/components/radio-button',
        title: 'Radio button',
        icon: 'radio_button_checked',
      },
      {
        path: '/components/select',
        title: 'Select',
        icon: 'list_alt',
      },
      {
        path: '/components/signature',
        title: 'Signature',
        icon: 'signature',
      },
      {
        path: '/components/skeleton',
        title: 'Skeleton',
        icon: 'article',
      },
      {
        path: '/components/switch',
        title: 'Switch',
        icon: 'toggle_on',
      },
      {
        path: '/components/table',
        title: 'Table',
        icon: 'table',
      },
      {
        path: '/components/tabs',
        title: 'Tabs',
        icon: 'tab',
      },
      {
        path: '/components/tags',
        title: 'Tags',
        icon: 'chips',
      },
      {
        path: '/components/timelines',
        title: 'Timelines',
        icon: 'timeline',
      },
      {
        path: '/components/tooltip',
        title: 'Tooltip',
        icon: 'tooltip_2',
      },
    ];
    return of(navComponents);
  }
}
