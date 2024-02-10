import {
  EnvironmentInjector,
  Injectable,
  Type,
  ViewChild,
  ViewContainerRef,
  createComponent,
  inject,
} from '@angular/core';

export type NgStyle = {
  width?: string;
  height?: string;
};

@Injectable({
  providedIn: 'root',
})
export class NgxDialog {
  ngxDialogId = -1;

  @ViewChild('target', { read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;
  envInjector = inject(EnvironmentInjector);

  constructor() {}

  open(component: Type<any>, data?: any, style?: NgStyle) {
    const componentRef = createComponent(component, {
      environmentInjector: this.envInjector,
    });

    const backdrop = document.createElement('div');
    backdrop.setAttribute('id', `ngx-overlay-${++this.ngxDialogId}`);
    backdrop.classList.add('ngx-global-backdrop');
    backdrop.classList.add('ngx-global-overlay-wrapper');

    const overlayPane = document.createElement('div');
    overlayPane.classList.add('ngx-overlay-pane');

    const componentElement = (componentRef.hostView as any)
      .rootNodes[0] as HTMLElement;

    overlayPane.appendChild(componentElement);
    backdrop.appendChild(overlayPane);
    document.body.appendChild(backdrop);
    if (style) {
      this.setStyle(overlayPane, style);
    }

    return componentRef;
  }

  setStyle(overlayPane: HTMLDivElement, style: NgStyle) {
    if (style?.width) {
      overlayPane.style.width = style.width;
    }
    if (style?.height) {
      overlayPane.style.height = style.height;
    }
  }

  closeAll() {
    document.getElementById(`ngx-overlay-${this.ngxDialogId}`)?.remove();
  }
}
