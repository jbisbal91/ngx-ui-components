import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class NgxDialog {
  constructor() {}

  open() {
    const backdrop = document.createElement('div');
    backdrop.classList.add('ngx-global-backdrop');
    backdrop.classList.add('ngx-global-overlay-wrapper');

    const overlayPane = document.createElement('div');
    overlayPane.classList.add('ngx-overlay-pane');
    overlayPane.textContent =
      'Este es un nuevo elemento agregado al body desde el servicio';

    backdrop.appendChild(overlayPane);
    document.body.appendChild(backdrop);
  }
}
