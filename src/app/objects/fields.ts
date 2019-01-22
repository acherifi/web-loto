import { FormControl } from '@angular/forms';

export class FieldObject {

  constructor(private _label: string, private _placeholder: string, private _type: string, private formControl: FormControl) {
  }

  get label(): string {
    return this._label;
  }

  get placeholder(): string {
    return this._placeholder;
  }

  get type(): string {
    return this._type;
  }

  get fieldValue(): any {
    return this.formControl.value;
  }

  get controller(): FormControl {
    return this.formControl;
  }




}
