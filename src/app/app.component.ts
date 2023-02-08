import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  AdditionalValue = '';
  namepattern = /[a-zA-Z]/;
  formdata = new FormGroup({
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
      Validators.max(999)]),
    emailid: new FormControl("", [
      Validators.required,
      Validators.email]),
    Phoneno: new FormControl("", [
      Validators.required,
      Validators.minLength(10),Validators.maxLength(10)]),
    AdditionalData: new FormControl("",[Validators.required])
 });

  onFormSubmit(data:any){
    console.log(this.formdata);
  }

  getAdditionalValue(event:any){
    this.AdditionalValue = event;
  }

  ngOnInit() {
    
  }

  get FirstName() { return this.formdata.get('FirstName'); }
  get LastName() { return this.formdata.get('LastName'); }
  get UserName() { return this.formdata.get('UserName'); }
  get Age() { return this.formdata.get('Age'); }
  get emailid() { return this.formdata.get('emailid'); }
  get Phoneno() { return this.formdata.get('Phoneno'); }
  get AdditionalData() {return this.formdata.get('AdditionalData')}
  

}

