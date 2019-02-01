import * as XLSX from 'xlsx';
import { Constants } from './constants';


export class ExcelOutput {

  private _workbook: XLSX.WorkBook;
  private _sheetName = 'Sheet 1';

  constructor(private filename: string) {
  }

  createWorkbook(list: Array<String>): void {
    this._workbook = XLSX.utils.book_new();
    const data = [];
    data.push(new Array(Constants.COLUMN_HEADER));
    list.forEach(element => data.push(new Array(element)));
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(this._workbook, ws, this._sheetName);
  }

  write(): void {
    XLSX.writeFile(this._workbook, this.filename);
  }

  getJsonData(): {}[] {
    return XLSX.utils.sheet_to_json(this._workbook.Sheets[this._sheetName]);
  }

}
