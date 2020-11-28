import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss']
})
export class AbilityComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}
}
