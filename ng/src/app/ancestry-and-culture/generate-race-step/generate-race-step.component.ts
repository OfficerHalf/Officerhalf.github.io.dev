import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Ability, Ref } from 'src/models/ancestry-and-culture';
import { AncestryAndCultureService } from '../ancestry-and-culture.service';

@Component({
  selector: 'app-generate-race-step',
  templateUrl: './generate-race-step.component.html',
  styleUrls: ['./generate-race-step.component.scss']
})
export class GenerateRaceStepComponent implements OnInit, OnDestroy {
  traits: Ability[] = [];
  destroy$ = new Subject();

  constructor(readonly service: AncestryAndCultureService) {}

  ngOnInit(): void {
    combineLatest([this.service.ancestry$, this.service.culture$])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([ancestry, culture]) => {
        let newTraits = [];
        if (ancestry && ancestry.abilities) {
          newTraits = [...ancestry.abilities];
        }
        if (culture && culture.abilities) {
          newTraits = [...newTraits, ...culture.abilities];
        }
        this.traits = newTraits;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSelectionChange(newValue: MatSelectionListChange): void {
    const ref = newValue.options[0].value as Ref | string;
    if (typeof ref === 'string') {
      this.service.setCurrentTrait(null);
    } else {
      this.service.setCurrentTrait(this.service.getAbility(ref.id));
    }
  }
}
