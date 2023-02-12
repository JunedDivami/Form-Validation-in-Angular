import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-inputselector',
  templateUrl: './inputselector.component.html',
  styleUrls: ['./inputselector.component.css']
})
export class InputselectorComponent {
  @Input() ind:number = 0;
  buttonCount:number = 1;
  @Output() sendAdditionalValue = new EventEmitter<any>();

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    // Extract changes to the input property by its name
    let change: SimpleChange = changes['ind']; 
    console.log("display functionality is working"+ changes['ind'].currentValue);
    this.buttonCount = changes['ind'].currentValue;
  }

index:number = 0;
option:string = 'Number';
// input:string = '';
AdditionalValueError = '';
//AdditionalDataArray:any = [];

sendObject:any = {
  value : "",
  index : 0
};

numValidate:any = "^[0-9]*$";
stringValidate = "^[a-zA-Z ]+$";
boolValidate = "^(True|False|TRUE|FALSE|true|false|0|1)$";
binaryValidate = "^[0*1*]*[1*0*]*"
hexValidate = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{6})$"

  selectorForm = new FormGroup({
    AdditionalValue: new FormControl("")
  })

  onFocusOut(inp:any,index:number){ // on focus out from input field this function will be triggered
    //this.input = inp.target.value; // getting the input value
    //this.AdditionalDataArray[index] = this.AdditionalValue?.value;
    this.index = index;
    this.sendObject.value = this.AdditionalValue?.value;
    this.sendObject.index = this.index
    
    this.inputOptionValidating(); // upon input focus out calling the validating function
  }

  AfterSelection(selected_option:any,index:number){ // After the option is selected from given options in selector tag, this function will be invoked and gets the selected option value
    this.option = selected_option.target.value;
    //this.input = ''; // initially clearing the input field upon option change
    this.AdditionalValue?.clearValidators(); //removing all Validators upon option change
    console.log(this.AdditionalValue?.value);
    // this.AdditionalValue?.setValue('');

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
        this.sendAdditionalValue.emit(this.sendObject); //emitting the input value which should be send upon true of given if condition
      }
      //else{this.sendAdditionalValue.emit('');} // if the status of the form is invalid then the empty string is send to be displayed in parent component
    }
    
    AddComponentFun(count:number):Array<number>{
      return Array(count);
    }

  get AdditionalValue() { return this.selectorForm.get('AdditionalValue'); } //passing the Additional Value to this components html to validate the errors and display the error.
}
