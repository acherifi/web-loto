export class Numbers {

  private numbers: Array<number>;

  constructor(private size: number) {
    this.numbers = new Array(size);
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
