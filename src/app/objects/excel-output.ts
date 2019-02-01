import * as XLSX from 'xlsx';
import { Constants } from './constants';


export class ExcelOutput {

  private workbook: XLSX.WorkBook;

  public objects: {}[];


  constructor(private filename: string) {
    this.workbook = XLSX.utils.book_new();
  }

  write(list: Array<string>): void {
    const data = [];
    data.push(new Array(Constants.COLUMN_HEADER));
    list.forEach(element => data.push(new Array(element)));
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(this.workbook, ws, 'Sheet 1');
    this.objects = XLSX.utils.sheet_to_json(ws);
    // XLSX.writeFile(this.workbook, this.filename);
  }
}
