import { Component, OnInit, TemplateRef, Type } from '@angular/core';
import { ModalRef } from '../../modal.ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  contentType: 'template' | 'string' | 'component' = 'string';
  stringContent = '';
  templateContent: TemplateRef<any> | null = null;
  componentContent!: Type<any>;
  context!: any;

  constructor(private readonly ref: ModalRef) {}

  ngOnInit(): void {
    if (typeof this.ref.content === 'string') {
      this.contentType = 'string';
      this.stringContent = this.ref.content;
    } else if (this.ref.content instanceof TemplateRef) {
      this.contentType = 'template';
      this.templateContent = this.ref.content;
      this.context = {
        close: this.ref.close.bind(this.ref)
      };
    } else {
      this.componentContent = this.ref.content;
      this.contentType = 'component';
    }
  }
}
