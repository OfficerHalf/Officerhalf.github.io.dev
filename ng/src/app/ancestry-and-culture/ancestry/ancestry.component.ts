import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Ancestry } from 'src/models/ancestry-and-culture';

@Component({
  selector: 'app-ancestry',
  templateUrl: './ancestry.component.html',
  styleUrls: ['./ancestry.component.scss']
})
export class AncestryComponent implements OnInit {
  @Input() ancestry: Ancestry;

  constructor() {}

  ngOnInit(): void {}
}
