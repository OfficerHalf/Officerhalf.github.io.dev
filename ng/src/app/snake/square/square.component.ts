import { Component, OnInit, Input } from '@angular/core';
import { UI } from 'src/models/snake';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() value: string;

  ngOnInit(): void {}

  get status(): string {
    return this.value === UI.snake ? 'snake' : this.value === UI.food ? 'food' : 'empty';
  }
}
