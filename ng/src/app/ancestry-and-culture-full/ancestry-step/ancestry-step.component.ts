import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Ancestry, Ref } from 'src/models/ancestry-and-culture';
import { AncestryAndCultureService } from '../ancestry-and-culture.service';

@Component({
  selector: 'app-ancestry-step',
  templateUrl: './ancestry-step.component.html',
  styleUrls: ['./ancestry-step.component.scss']
})
export class AncestryStepComponent implements OnInit {
  ancestries: Ref[];

  constructor(readonly service: AncestryAndCultureService) {
    this.ancestries = service.getAncestryList();
  }

  ngOnInit(): void {}

  onSelectionChange(newValue: MatSelectionListChange): void {
    const ref = newValue.options[0].value as Ref;
    this.service.setCurrentAncestry(this.service.getAncestry(ref.id));
  }
}
