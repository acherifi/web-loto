import * as XLSX from 'xlsx';


export class ExcelOutput {

  private workbook: XLSX.WorkBook;

  constructor(private filename: string) {
    this.workbook = XLSX.utils.book_new();
  }

  write(list: Array<string>): void {
    const data = [];
    list.forEach(element => data.push(new Array(element)));
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(this.workbook, ws, 'Sheet 1');
    XLSX.writeFile(this.workbook, this.filename);
  }
}
