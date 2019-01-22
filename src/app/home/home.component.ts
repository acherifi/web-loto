import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../services/generator/generator.service';
import { Numbers } from '../objects/numbers';
import { updateBinding } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private numberList: Array<string>;
  private generating: boolean;

  constructor(private generatorService: GeneratorService) {
    this.generatorService.numberCount = 20000;
    this.numberList = new Array();
  }

  ngOnInit() {
    this.update();
  }

  update() {
    this.generatorService.generate();
    const numbers = this.generatorService.rawNumbers;
    if (this.numberList.length !== 0 ) {
      this.numberList = [];
    }
    numbers.forEach(element => this.numberList.push(element.getNumbersAsString()));
  }

  click() {
    this.update();
  }

}
