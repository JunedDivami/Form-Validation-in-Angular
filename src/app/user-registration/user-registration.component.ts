import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  submittedData :any;
  AdditionalValue = ''; // variable to get the Additional data's input-field value from other component and display in {{html}}
  namepattern = /^[a-zA-Z]+[a-zA-Z]$/; //name pattern regex to validate name input field
  formData = new FormGroup({ // formData is Form group name which contains respective form-controls and adding validators to each to validate respective input fields
    FirstName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),Validators.maxLength(256),Validators.pattern(this.namepattern)]),
    LastName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),Validators.maxLength(256),Validators.pattern(this.namepattern)]),
    UserName: new FormControl("",[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(256),
      Validators.pattern("^[a-zA-Z0-9]+([._]?[.-]?[a-zA-Z0-9]+)*$")]),
    Age: new FormControl("", [
      Validators.required,Validators.min(0),
      Validators.max(999),Validators.pattern("^[0-9]*$")]),
    emailid: new FormControl("", [
      Validators.required,
      Validators.email]),
    Phoneno: new FormControl("", [
      Validators.required,
      Validators.minLength(10),Validators.maxLength(10)]),
    AdditionalData: new FormControl("")
 });

 constructor(private router: Router, private activeroute: ActivatedRoute){}

  onFormSubmit(data:any){ //on clicking the submit button this button will be triggered
    // console.log(this.formData);
    this.submittedData = this.formData.value; //sending the values of the forms which contains the data
    //routing to the other component with the data
    this.router.navigate(['display-component'],{
      state: { submittedData : this.submittedData, AdditionalValue : this.AdditionalValue },
      // relativeTo: this.activeroute
    })

  }

  getAdditionalValue(event:any){ //this function is passed by @output event emmiter from inputselector-component which get the input field data.
    this.AdditionalValue = event; //this gives the data to AdditionalValue variable which is used to show in html page
  }
  buttonCount=1;
r = false;
AddAdditionalDataIncrement(){
this.buttonCount++;
if(this.buttonCount==1){this.r=false}
else{this.r=true}
  }

  AddAdditionalDataDecrement(){
    this.buttonCount--;
    if(this.buttonCount==1){this.r=false}
else{this.r=true}
  }
  
  AddComponentFun(n: number): Array<number> {
    return Array(n);
  }


  // get functions to pass the value and validate and catch the errors in *ngIf to specify the ?errors.
  get FirstName() { return this.formData.get('FirstName'); }
  get LastName() { return this.formData.get('LastName'); }
  get UserName() { return this.formData.get('UserName'); }
  get Age() { return this.formData.get('Age'); }
  get emailid() { return this.formData.get('emailid'); }
  get Phoneno() { return this.formData.get('Phoneno'); }
  get AdditionalData() {return this.formData.get('AdditionalData')}
  

}
