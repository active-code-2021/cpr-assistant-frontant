import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppService{
   
//http://localhost:5000/
   constructor(private _http: HttpClient) {  
     console.log(
        this._http.get('/')
     ) 
    } 

    
}