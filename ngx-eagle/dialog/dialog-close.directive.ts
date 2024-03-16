import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { DialogRef } from './dialog-ref';
import { DialogService } from './dialog.service';

@Directive({
  selector: '[dialogClose]',
  standalone: true,
})
export class DialogCloseDirective implements OnInit {
  private host: ElementRef<HTMLElement> = inject(ElementRef);
  private dialogService = inject(DialogService);
  ref: DialogRef | undefined | null = inject(DialogRef, { optional: true });

  @Input()
  dialogClose: any;

  ngOnInit() {
    this.ref = this.ref || this.getRefFromParent();
  }

  @HostListener('click')
  onClose() {
    this.ref?.close(this.dialogClose);
  }

  private getRefFromParent() {
    let parent = this.host.nativeElement.parentElement;
    while (parent && parent.localName !== 'ngx-dialog') {
      parent = parent.parentElement;
    }
    return parent
      ? this.dialogService.dialogs.find(({ id }) => id === parent?.id)
      : null;
  }
}
