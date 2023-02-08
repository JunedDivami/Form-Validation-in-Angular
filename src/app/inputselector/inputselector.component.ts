import { Component, EventEmitter, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-inputselector',
  templateUrl: './inputselector.component.html',
  styleUrls: ['./inputselector.component.css']
})
export class InputselectorComponent {
  @Output() sendAdditionalValue = new EventEmitter<string>();
option:string = 'Number';
input:string = '';

numValidate:any = "^[0-9]*$";
stringValidate = "^[a-zA-Z]+$";
boolValidate = "^(True|False|TRUE|FALSE|true|false)$";
binaryValidate = "^[0*1*]*[1*0*]*"
hexValidate = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{6})$"

  selectorForm = new FormGroup({
    AdditionalValue: new FormControl("")
  })

  onFocusOut(inp:any){
    this.input = inp.target.value;
    console.log(this.input);
    this.inputOptionValidating();
  }

  AfterSelection(selected_option:any){
    this.option = selected_option.target.value;
    this.input = '';
    // this.AdditionalValue?.removeValidators([Validators.pattern(this.numValidate)]);
    // this.AdditionalValue?.updateValueAndValidity();
    this.AdditionalValue?.clearValidators();
    console.log(this.option);
    this.inputOptionValidating();
  }

  inputOptionValidating(){
    if(this.option === 'Number'){
      this.selectorForm.controls["AdditionalValue"].addValidators([Validators.pattern(this.numValidate),Validators.required]);
      this.AdditionalValue?.updateValueAndValidity();
    }
    else if(this.option === 'String'){
      this.selectorForm.controls["AdditionalValue"].addValidators([Validators.pattern(this.stringValidate),Validators.required]);
      this.AdditionalValue?.updateValueAndValidity();
    }
    else if(this.option === 'Boolean'){
      this.selectorForm.controls["AdditionalValue"].addValidators([Validators.pattern(this.boolValidate),Validators.required]);
      this.AdditionalValue?.updateValueAndValidity();
    }
    else if(this.option === 'HexaCode'){
      this.selectorForm.controls["AdditionalValue"].addValidators([Validators.pattern(this.hexValidate),Validators.required]);
      this.AdditionalValue?.updateValueAndValidity();
    }
    else if(this.option === 'Binary'){
      this.selectorForm.controls["AdditionalValue"].addValidators([Validators.pattern(this.binaryValidate),Validators.required]);
      this.AdditionalValue?.updateValueAndValidity();
    }

      if(this.selectorForm.controls.AdditionalValue?.['status'] == 'VALID'){
        console.log("working pass the data");
        this.sendAdditionalValue.emit(this.input);
      }
      else{this.sendAdditionalValue.emit('');}
    }
    


  get AdditionalValue() { return this.selectorForm.get('AdditionalValue'); }
}
