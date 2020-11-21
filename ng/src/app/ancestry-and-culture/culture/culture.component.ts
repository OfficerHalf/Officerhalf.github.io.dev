import { Component, Input, OnInit } from '@angular/core';
import { Culture } from 'src/models/ancestry-and-culture';
import { AncestryAndCultureService } from '../ancestry-and-culture.service';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss']
})
export class CultureComponent implements OnInit {
  constructor(readonly service: AncestryAndCultureService) {}

  ngOnInit(): void {}
}
