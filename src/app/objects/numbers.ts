export class Numbers {

  private numbers: Array<number>;
  private stringNumber: String;

  constructor(private size: number, private _min: number, private _max: number) {
    this.numbers = new Array(size);
    this.generate();
  }

  generate(): void {
    this.add(this.generateNumber(10, this._max));
    for (let j = 0; j < this.size - 1; j ++) {
      let random = this.generateNumber(this._min, this._max);
      while (this.numbers.includes(random)) {
        random = this.generateNumber(this._min, this._max);
      }
      this.add(random);
    }
  }

  private generateNumber(min: number, max: number): number {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
  }

  getRawNumbers(): Array<Number> {
    return this.numbers;
  }

  getNumbersAsString(): string {
    let toReturn = '';
    this.numbers.forEach(element => {
      const n = this.addZero(element);
      toReturn += n;
    });
    return toReturn;
  }

  addZero(n: number): string {
    return (n < 10 ? '0' + n : n.toString());
  }

  add(n: number) {
    this.numbers.push(n);
    this.numbers.sort( (a: number, b: number) => b - a);
  }

}
