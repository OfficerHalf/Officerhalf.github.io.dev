import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BattlemapPage } from '../../interfaces/battlemap.interface';
import { BattlemapService } from '../../services/battlemap.service';

@Component({
  selector: 'app-battlemap',
  templateUrl: './battlemap.component.html',
  styleUrls: ['./battlemap.component.scss']
})
export class BattlemapComponent implements OnInit {
  mapData = new BehaviorSubject<BattlemapPage | undefined>(undefined);

  constructor(private route: ActivatedRoute, private readonly battlemapService: BattlemapService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') as string;
    this.mapData.next(this.battlemapService.getBattlemap(slug));
  }
}
