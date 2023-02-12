import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, Grid, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { CrudHttpService } from '../crud-http.service';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent {
  columnDefs:any;
  rowData:any;
//get id of the specific data to send the get request(fetching data from server i.e, db.json file)
data:any; // store the data got from server
// Getting the Values from app component on routing and taking in a variable to display in html
  constructor(private router: Router, private crudservice: CrudHttpService, private http: HttpClient){
    this.data = this.router.getCurrentNavigation()?.extras.state?.['submittedData'];
    console.log("before"+this.data);
    // this.AdditionalValue = this.router.getCurrentNavigation()?.extras.state?.['AdditionalValue'];
    console.log(this.router.getCurrentNavigation());
    //calling the get user method of service to get data and storing response in this.data variable
    crudservice.getUserFromService(this.data).subscribe(res => {
      this.data = res;

      // this.columnDefs = [{ field: "FirstName" }, { field: "LastName" }, { field: "UserName" }, {field:"Age"}, {field:"EmailId"}, {field:"Phone no"}, {field:"Date"}];

    });


    crudservice.getAllUserFromService().subscribe(res => {
      
      this.columnDefs = [{ field: "FirstName" }, { field: "LastName" }, { field: "UserName" }, {field:"Age"}, {field:"emailid"}, {field:"Phoneno"}, {field:"Date"}, {field: "AdditionalData"}, {field:"AdditionalValue"}];
      
      this.rowData = res;
    });

  }



  

}
