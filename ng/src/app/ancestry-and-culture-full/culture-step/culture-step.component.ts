import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Culture, Ref } from 'src/models/ancestry-and-culture';
import { AncestryAndCultureService } from '../ancestry-and-culture.service';

@Component({
  selector: 'app-culture-step',
  templateUrl: './culture-step.component.html',
  styleUrls: ['./culture-step.component.scss']
})
export class CultureStepComponent implements OnInit {
  cultures: Ref[];

  constructor(readonly service: AncestryAndCultureService) {
    this.cultures = service.getCultureList();
  }

  ngOnInit(): void {}

  onSelectionChange(newValue: MatSelectionListChange): void {
    const ref = newValue.options[0].value as Ref;
    this.service.setCurrentCulture(this.service.getCulture(ref.id));
  }
}
