import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgxShape, NgxSize } from './typings';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ngx-avatar',
  template: ` <img
      class="ngx-avatar-img"
      *ngIf="ngxSrc"
      [src]="ngxSrc"
      alt="ngx-avatar"
    />
    <span *ngIf="ngxText && !ngxSrc">{{ getInitials(ngxText) }}</span>

    <span #ngx_avatar_user *ngIf="!ngxSrc && !ngxText" class="ngx-avatar-user"
      ><svg
        viewBox="64 64 896 896"
        focusable="false"
        fill="currentColor"
        width="1em"
        height="1em"
        data-icon="user"
        aria-hidden="true"
      >
        <path
          d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
        ></path>
      </svg>
    </span>`,
  host: {
    class: 'ngx-avatar',
    '[class.ngx-avatar-circle]': `ngxShape === 'circle'`,
    '[class.ngx-avatar-square]': `ngxShape === 'square'`,
    '[class.ngx-avatar-sm]': `ngxSize === 'small'`,
    '[class.ngx-avatar-df]': `ngxSize === 'default'`,
    '[class.ngx-avatar-lg]': `ngxSize === 'large'`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf],
})
export class AvatarComponent implements AfterViewInit {
  @Input() ngxShape: NgxShape = 'circle';
  @Input() ngxSize: NgxSize | number = 'default';
  @Input() ngxSrc: string | null = null;
  @Input() ngxText: string | null = null;

  @ViewChild('ngx_avatar_user') avatarUserRef!: ElementRef;

  constructor(
    public elementRef: ElementRef,
    private renderer2: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (typeof this.ngxSize === 'number') {
      this.setSizeInNumber();
    }
    this.cdr.markForCheck();
  }

  setSizeInNumber() {
    const size = Number(this.ngxSize) / 16 + 'rem';
    this.renderer2.setStyle(this.elementRef.nativeElement, 'width', size);
    this.renderer2.setStyle(this.elementRef.nativeElement, 'height', size);
    this.renderer2.setStyle(this.elementRef.nativeElement, 'line-height', size);
    this.setFontSizeImgUser();
  }

  setFontSizeImgUser() {
    if (this.avatarUserRef) {
      const fontSize = `${(Number(this.ngxSize) * 0.5) / 16}rem`;
      this.renderer2.setStyle(this.avatarUserRef.nativeElement, 'font-size',fontSize);
    }
  }

  getInitials(text: string): string {
    const words: string[] = text.split(' ');
    const initials: string[] = words.map((word) =>
      word.charAt(0).toUpperCase()
    );
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.getBackgroundColor(initials.join(''))
    );
    return initials.join('');
  }

  getBackgroundColor(initials: string): string {
    const colors = {
      A: '#FF5733', // Rojo
      B: '#33FF57', // Verde
      C: '#3357FF', // Azul
      D: '#FF33E8', // Rosa
      E: '#FFD733', // Amarillo
      F: '#FF6347', // Tomate
      G: '#32CD32', // Verde lima
      H: '#8A2BE2', // Azul añil
      I: '#FF1493', // Rosa fuerte
      J: '#FF4500', // Naranja rojizo
      K: '#FF8C00', // Naranja oscuro
      L: '#00BFFF', // Azul celeste
      M: '#9400D3', // Violeta oscuro
      N: '#008080', // Verde azulado
      O: '#800000', // Marrón
      P: '#00FF7F', // Verde primavera
      Q: '#FFD700', // Oro
      R: '#800080', // Púrpura
      S: '#008000', // Verde
      T: '#FFA500', // Naranja
      U: '#4B0082', // Índigo
      V: '#FFC0CB', // Rosa claro
      W: '#1E90FF', // Azul real
      X: '#FF00FF', // Fucsia
      Y: '#FFFF00', // Amarillo brillante
      Z: '#808080', // Gris para las letras no asignadas
    };

    const initialLetter = initials.charAt(0).toUpperCase();
    const color =
      (colors as { [key: string]: string })[initialLetter] || '#CCCCCC';
    return color;
  }
}
