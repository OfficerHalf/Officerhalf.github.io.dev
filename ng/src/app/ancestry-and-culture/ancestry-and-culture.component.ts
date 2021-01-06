import { Component, OnInit } from '@angular/core';
import { WeightedAncestry, WeightedOption } from './interfaces/WeightedOption';
import { ancestries, cultures, geographicCultures, planarCultures } from './data/ancestries-cultures';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ancestry-and-culture',
  templateUrl: './ancestry-and-culture.component.html',
  styleUrls: ['./ancestry-and-culture.component.scss']
})
export class AncestryAndCultureComponent implements OnInit {
  ancestries: WeightedAncestry[];
  cultures: WeightedOption[];
  geographicCultures: WeightedOption[];
  planarCultures: WeightedOption[];
  currentAncestries: WeightedAncestry[];
  currentCulture: WeightedOption;
  currentGeographicCulture: WeightedOption;
  currentPlanarCulture: WeightedOption;

  // Form
  ignoreWeights = new FormControl(false);
  lockAncestry = new FormControl(false);
  lockCulture = new FormControl(false);
  lockGeographicCulture = new FormControl(false);
  lockPlanarCulture = new FormControl(false);
  defaultSameCultureChance = 80;
  defaultMultipleAncestryChance = 20;
  sameCultureChance = new FormControl(this.defaultSameCultureChance);
  multipleAncestryChance = new FormControl(this.defaultMultipleAncestryChance);
  form = new FormGroup({
    ignoreWeights: this.ignoreWeights,
    lockAncestry: this.lockAncestry,
    lockCulture: this.lockCulture,
    lockGeographicCulture: this.lockGeographicCulture,
    lockPlanarCulture: this.lockPlanarCulture,
    sameCultureChance: this.sameCultureChance,
    multipleAncestryChance: this.multipleAncestryChance
  });

  constructor() {
    this.ancestries = ancestries;
    this.cultures = cultures;
    this.geographicCultures = geographicCultures;
    this.planarCultures = planarCultures;
  }

  ngOnInit(): void {}

  generate(): void {
    this.currentAncestries = this.randomAncestry();
    this.currentCulture = this.randomCulture(this.currentAncestries);
    this.currentGeographicCulture = this.weightedRandom(this.geographicCultures);
    this.currentPlanarCulture = this.weightedRandom(this.planarCultures);
  }

  private randomAncestry(): WeightedAncestry[] {
    let result: WeightedAncestry;
    if (!this.ignoreWeights) {
      result = this.weightedRandom(this.ancestries);
    } else {
      result = this.unweightedRandom(this.ancestries);
    }

    // Should this be mixed ancestry?
    const random = this.randomNumber(100);
    if (random < this.multipleAncestryChance.value && !this.ignoreWeights) {
      return [result, this.weightedRandom(this.ancestries)];
    } else if (random < this.multipleAncestryChance.value && this.ignoreWeights) {
      return [result, this.unweightedRandom(this.ancestries)];
    } else {
      return [result];
    }
  }

  private randomCulture(ancestries?: WeightedAncestry[]): WeightedOption {
    // Same culture?
    const sameCulture = this.randomNumber(100);

    if (sameCulture < this.sameCultureChance.value && ancestries) {
      const ancestry = this.weightedRandom(ancestries);
      const culture = this.weightedRandom(this.cultures.filter(c => ancestry.match.includes(c.option)));
      return culture;
    } else {
      return this.weightedRandom(this.cultures);
    }
  }

  private randomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  // should call weighted/unweighted based on current state
  private resolvedRandom;

  private unweightedRandom<T>(options: T[]): T {
    const index = this.randomNumber(options.length);
    return options[index];
  }

  private weightedRandom<T extends WeightedOption>(options: T[]): T {
    // Prepare
    const sorted = [...options].sort((a, b) => b.weight - a.weight);
    let cumulativeSum = 0;
    const segments: number[] = [];
    sorted.forEach(opt => {
      cumulativeSum += opt.weight;
      segments.push(cumulativeSum);
    });

    // Generate random
    const result = this.randomNumber(cumulativeSum);

    // Find the result
    for (let i = 0; i < sorted.length; i++) {
      if (result < segments[i]) {
        return sorted[i];
      }
    }
    return sorted[0];
  }
}
