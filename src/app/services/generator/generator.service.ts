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
      const number = new Numbers(this._numberSize);
      number.add(this.generateNumber(10, this._max));
      for (let j = 0; j < this._numberSize - 1; j ++) {
        let random = this.generateNumber(this._min, this._max);
        while (random === number.getRawNumbers[j - 1]) {
          random = this.generateNumber(this._min, this._max);
        }
        number.add(random);
      }
      this.numbers.push(number);
    }
  }

  private generateNumber(min: number, max: number): number {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
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
