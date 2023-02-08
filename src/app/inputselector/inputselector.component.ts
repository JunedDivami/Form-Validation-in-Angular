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
AdditionalValueError = '';

numValidate:any = "^[0-9]*$";
stringValidate = "^[a-zA-Z]+$";
boolValidate = "^(True|False|TRUE|FALSE|true|false|0|1)$";
binaryValidate = "^[0*1*]*[1*0*]*"
hexValidate = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{6})$"

  selectorForm = new FormGroup({
    AdditionalValue: new FormControl("")
  })

  onFocusOut(inp:any){ // on focus out from input field this function will be triggered
    this.input = inp.target.value; // getting the input value
    console.log(this.input);
    this.inputOptionValidating(); // upon input focus out calling the validating function
  }

  AfterSelection(selected_option:any){ // After the option is selected from given options in selector tag, this function will be invoked and gets the selected option value
    this.option = selected_option.target.value;
    this.input = ''; // initially clearing the input field upon option change
    this.AdditionalValue?.clearValidators(); //removing all Validators upon option change
    this.AdditionalValueError = '';
    console.log(this.option);
    this.inputOptionValidating(); //upon option change calling the validation function
  }

  inputOptionValidating(){ // this function is for adding validators to the specific selected option.
    // adding validations for numbers
    //AdditionalValueError holds the invalid msg to display which is displaying below the input field of AdditionalValue.
    if(this.option === 'Number'){
      this.AdditionalValue?.addValidators([Validators.pattern(this.numValidate),Validators.required]);
      this.AdditionalValue?.updateValueAndValidity();
      this.AdditionalValueError = '*Invalid Number!';
    }
    // adding validations for Strings
    else if(this.option === 'String'){
      this.AdditionalValue?.addValidators([Validators.pattern(this.stringValidate),Validators.required]);
      this.AdditionalValue?.updateValueAndValidity();
      this.AdditionalValueError = '*Invalid String!';
    }
    // adding validations for Boolean values
    else if(this.option === 'Boolean'){
      this.AdditionalValue?.addValidators([Validators.pattern(this.boolValidate),Validators.required]);
      this.AdditionalValue?.updateValueAndValidity();
      this.AdditionalValueError = '*Invalid Boolean Value!';
    }
    // adding validations for Hexa code color
    else if(this.option === 'HexaCode'){
      this.AdditionalValue?.addValidators([Validators.pattern(this.hexValidate),Validators.required]);
      this.AdditionalValue?.updateValueAndValidity();
      this.AdditionalValueError = '*Invalid Hexa Code!';
    }
    // adding validations for Binary numbers
    else if(this.option === 'Binary'){
      this.AdditionalValue?.addValidators([Validators.pattern(this.binaryValidate),Validators.required]);
      this.AdditionalValue?.updateValueAndValidity();
      this.AdditionalValueError = '*Invalid Binary Number!';
    }

    //sending additional data to be parent component using @output() and EventEmitter
      if(this.AdditionalValue?.['status'] == 'VALID'){
        // console.log("working pass the data");
        this.sendAdditionalValue.emit(this.input); //emitting the input value which should be send upon true of given if condition
      }
      else{this.sendAdditionalValue.emit('');} // if the status of the form is invalid then the empty string is send to be displayed in parent component
    }
    
    // selectedOption(index:any){
    //   index.next.focus();
    // }

  get AdditionalValue() { return this.selectorForm.get('AdditionalValue'); } //passing the Additional Value to this components html to validate the errors and display the error.
}
