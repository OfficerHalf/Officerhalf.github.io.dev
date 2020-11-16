import { Component, Input, OnInit } from '@angular/core';
import { Culture } from 'src/models/ancestry-and-culture';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss']
})
export class CultureComponent implements OnInit {
  @Input() culture: Culture;

  constructor() {}

  ngOnInit(): void {}
}
