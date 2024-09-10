import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface NavComponents {
  path: string;
  title: string;
  src: string;
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
        src: 'assets/images/components/Avatar.svg',
      },
      {
        path: '/components/badge',
        title: 'Badge',
        src: 'assets/images/components/Badge.svg',
      },
      {
        path: '/components/button',
        title: 'Button',
        src: 'assets/images/components/Button.svg',
      },
      {
        path: '/components/carousel',
        title: 'Carousel',
        src: 'assets/images/components/Carousel.svg',
      },
      {
        path: '/components/card',
        title: 'Card',
        src: 'assets/images/components/Card.svg',
      },
      {
        path: '/components/checkbox',
        title: 'Checkbox',
        src: 'assets/images/components/CheckBox.svg',
      },
      {
        path: '/components/datepicker',
        title: 'Datepicker',
        src: 'assets/images/components/DatePicker.svg',
      },
      {
        path: '/components/dialog',
        title: 'Dialog',
        src: 'assets/images/components/Dialog.svg',
      },
      {
        path: '/components/divider',
        title: 'Divider',
        src: 'assets/images/components/Divider.svg',
      },
      {
        path: '/components/drawer',
        title: 'Drawer',
        src: 'assets/images/components/Drawer.svg',
      },
      {
        path: '/components/dropdown',
        title: 'Dropdown',
        src: 'assets/images/components/Dropdown.svg',
      },
      {
        path: '/components/expansion',
        title: 'Expansion Panel',
        src: 'assets/images/components/ExpansionPanel.svg',
      },
      {
        path: '/components/grid',
        title: 'Grid',
        src: 'assets/images/components/Grid.svg',
      },
      {
        path: '/components/image-cropper',
        title: 'Image Cropper',
        src: 'assets/images/components/ImageCropper.svg',
      },
      {
        path: '/components/input',
        title: 'Input',
        src: 'assets/images/components/Input.svg',
      },
      {
        path: '/components/paginator',
        title: 'Paginator',
        src: 'assets/images/components/Pagination.svg',
      },
      {
        path: '/components/progress',
        title: 'Progress',
        src: 'assets/images/components/Progress.svg',
      },
      {
        path: '/components/rate',
        title: 'Rate',
        src: 'assets/images/components/Rate.svg',
      },
      {
        path: '/components/resize',
        title: 'Resize',
        src: 'assets/images/components/Resize.svg',
      },
      {
        path: '/components/radio-button',
        title: 'Radio button',
        src: 'assets/images/components/Radio.svg',
      },
      {
        path: '/components/select',
        title: 'Select',
        src: 'assets/images/components/Select.svg',
      },
      {
        path: '/components/signature',
        title: 'Signature',
        src: 'assets/images/components/Signature.svg',
      },
      {
        path: '/components/switch',
        title: 'Switch',
        src: 'assets/images/components/Switch.svg',
      },
      {
        path: '/components/table',
        title: 'Table',
        src: 'assets/images/components/Table.svg',
      },
      {
        path: '/components/tabs',
        title: 'Tabs',
        src: 'assets/images/components/Tabs.svg',
      },
      {
        path: '/components/tags',
        title: 'Tags',
        src: 'assets/images/components/Tags.svg',
      },
      {
        path: '/components/timelines',
        title: 'Timelines',
        src: 'assets/images/components/Timeline.svg',
      },
      {
        path: '/components/tooltip',
        title: 'Tooltip',
        src: 'assets/images/components/Tooltip.svg',
      },
    ];
    return of(navComponents);
  }
}
