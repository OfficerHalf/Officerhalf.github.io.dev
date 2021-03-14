import { Component } from '@angular/core';
import { ImageModalData } from '../../interfaces/modal.interface';
import { ModalRef } from '../../modal.ref';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent {
  data: ImageModalData;
  constructor(private readonly ref: ModalRef<void, ImageModalData>) {
    this.data = this.ref.data;
  }
}
