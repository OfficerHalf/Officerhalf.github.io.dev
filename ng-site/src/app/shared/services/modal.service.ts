import { Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ModalRef } from '../modal.ref';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private readonly overlay: Overlay, private readonly injector: Injector) {}

  open<R = any, T = any>(content: string | TemplateRef<any> | Type<any>, data: T): ModalRef<R, T> {
    const config = new OverlayConfig({
      hasBackdrop: true,
      panelClass: 'modal',
      backdropClass: 'modal-backdrop',
      positionStrategy: this.overlay.position().global().centerVertically().centerHorizontally()
    });

    const overlayRef = this.overlay.create(config);
    const modalRef = new ModalRef<R, T>(overlayRef, content, data);
    const injector = this.createInjector(modalRef, this.injector);
    overlayRef.attach(new ComponentPortal(ModalComponent, null, injector));

    return modalRef;
  }

  private createInjector(ref: ModalRef, injector: Injector) {
    return Injector.create({ providers: [{ provide: ModalRef, useValue: ref }], parent: injector });
  }
}
