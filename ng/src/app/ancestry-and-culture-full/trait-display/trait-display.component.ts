import { Component, OnInit } from '@angular/core';
import { AncestryAndCultureService } from '../ancestry-and-culture.service';

@Component({
  selector: 'app-trait-display',
  templateUrl: './trait-display.component.html',
  styleUrls: ['./trait-display.component.scss']
})
export class TraitDisplayComponent implements OnInit {
  constructor(readonly service: AncestryAndCultureService) {}

  ngOnInit(): void {}
}
