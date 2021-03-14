import { OverlayRef } from '@angular/cdk/overlay';
import { TemplateRef, Type } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalCloseType } from './enum/modal.enum';
import { ModalCloseEvent } from './interfaces/modal.interface';

export class ModalRef<R = any, T = any> {
  modalClosed = new Subject<ModalCloseEvent<R>>();

  constructor(public overlay: OverlayRef, public content: string | TemplateRef<any> | Type<any>, public data: T) {
    overlay.backdropClick().subscribe(() => {
      this.doClose(ModalCloseType.BackdropClick, null);
    });
  }

  close(data: R) {
    this.doClose(ModalCloseType.Close, data);
  }

  private doClose(type: ModalCloseType, data: R | null) {
    this.overlay.dispose();
    this.modalClosed.next({
      type,
      data
    });
    this.modalClosed.complete();
  }
}
