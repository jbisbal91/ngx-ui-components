import {
  ComponentFactoryResolver,
  Injectable,
  Injector,
  Type,
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

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  open(component: Type<any>, data?: any, style?: NgStyle) {
    const componentFactory = this.resolver.resolveComponentFactory(component);
    const componentRef = componentFactory.create(this.injector);

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
