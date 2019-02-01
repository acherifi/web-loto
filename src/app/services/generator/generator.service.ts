import { Injectable } from '@angular/core';
import {Numbers} from '../../objects/numbers';

@Injectable({
  providedIn: 'root'
})

export class GeneratorService {

  private numbers: Array<Numbers>;
  private _numberCount: number;
  private _min: number;
  private _max: number;
  private _numberSize: number;

  constructor() {
    this.numbers = new Array();
    this._numberSize = 5;
  }

  generate() {
    if (this.numbers.length !== 0 ) {
      this.numbers = [];
    }
    for (let i = 0; i < this._numberCount; i ++) {
      this.numbers.push(new Numbers(this._numberSize, this._min, this._max));
    }
  }
  get rawNumbers(): Array<Numbers> {
    return this.numbers;
  }

  set numberCount(count: number) {
    this._numberCount = count;
  }

  set numberSize(numberSize: number) {
    this._numberSize = numberSize;
  }

  set min(min: number) {
    this._min = min;
  }

  set max(max: number) {
    this._max = max;
  }

  get max(): number {
    return this._max;
  }
}
