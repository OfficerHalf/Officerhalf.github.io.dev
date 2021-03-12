import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BattlemapPage } from './interfaces/battlemap.interface';
import { BattlemapService } from './services/battlemap.service';

@Component({
  selector: 'app-battlemaps',
  templateUrl: './battlemaps.component.html',
  styleUrls: ['./battlemaps.component.scss']
})
export class BattlemapsComponent implements OnInit {
  maps = new BehaviorSubject<BattlemapPage[]>([]);
  constructor(private readonly battlemapService: BattlemapService) {}

  ngOnInit(): void {
    this.maps.next(this.battlemapService.getBattlemapList());
  }
}
