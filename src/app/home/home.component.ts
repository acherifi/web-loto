import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../services/generator/generator.service';
import { FieldObject } from '../objects/fields';
import { FormControl } from '@angular/forms';
import { ExcelOutput } from '../objects/excel-output';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Constants } from '../objects/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private numberList: Array<string>;
  private generating: boolean;
  private rowData: {}[];
  private columnDefs = [{headerName: 'Numbers', field: Constants.COLUMN_HEADER}];

  fields = [
    new FieldObject('Nombre de chiffres', '20', 'number', new FormControl(20)),
    new FieldObject('Minimum', '1', 'number', new FormControl(1)),
    new FieldObject('Maximum', '50', 'number', new FormControl(50)),
    new FieldObject('Nom du fichier', 'fichier.xslx', 'text', new FormControl('fichier.xlsx')),
  ];

  constructor(private generatorService: GeneratorService, private snackBar: MatSnackBar) {
    this.generatorService.numberCount = 20;
    this.numberList = new Array();
  }

  ngOnInit() {
  }

  update() {
    this.generatorService.generate();
    const numbers = this.generatorService.rawNumbers;
    if (this.numberList.length !== 0 ) {
      this.numberList = [];
    }
    numbers.forEach(element => this.numberList.push(element.getNumbersAsString()));
    // new ExcelOutput(this.fields[3].fieldValue).write(this.numberList);
    const out = new ExcelOutput(this.fields[3].fieldValue);
    out.write(this.numberList);
    this.rowData = out.objects;
    this.snackBar.dismiss();
    this.snackBar.open('Terminé !');
  }

  click() {
    this.snackBar.open('Génération...');
    this.generatorService.numberCount = parseInt(this.fields[0].fieldValue, 10);
    this.generatorService.min = parseInt(this.fields[1].fieldValue, 10);
    this.generatorService.max = parseInt(this.fields[2].fieldValue, 10);
    this.update();
  }

}
