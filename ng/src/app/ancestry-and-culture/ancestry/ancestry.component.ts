import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { AncestryAndCultureService } from '../ancestry-and-culture.service';

@Component({
  selector: 'app-ancestry',
  templateUrl: './ancestry.component.html',
  styleUrls: ['./ancestry.component.scss']
})
export class AncestryComponent implements OnInit {
  constructor(readonly service: AncestryAndCultureService) {}

  ngOnInit(): void {
    this.service.ancestry$.subscribe(value => {
      console.log(value);
    });
  }
}
