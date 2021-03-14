import { ModalCloseType } from '../enum/modal.enum';

export interface ModalCloseEvent<R> {
  type: ModalCloseType;
  data: R | null;
}

export interface ImageModalData {
  src: string;
  alt: string;
  text: string;
}
