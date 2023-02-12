import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudHttpService {
  newObservable = new Observable<any>;

  serviceURL : string = "";

  constructor(private http : HttpClient) { 
    this.serviceURL = "http://localhost:3000/users"
   }

   getUserFromService(id:any) : Observable<any>{
    return this.http.get<any>(this.serviceURL+"/"+id);
   }

   getAllUserFromService() : Observable<any[]>{
    return this.http.get<any[]>(this.serviceURL);
   }

   postDataFromService(FormData:any) : Observable<any>{
    return this.http.post<any>(this.serviceURL,FormData);
   }

   DeleteDataFromService(FormData:any) : Observable<any>{
    return this.http.delete<any>(this.serviceURL+'/'+FormData.id);
   }

   updateDataFromService(FormData:any) : Observable<any>{
    return this.http.put<any>(this.serviceURL+'/'+FormData.id,FormData);
   }

}
