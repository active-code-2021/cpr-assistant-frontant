import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
// 
@Injectable()
export class SimpleService{

   // rout:string='http://localhost:5000/';
    constructor(private _http: HttpClient) { }
    get():Observable<string>{
        return this._http.get<string>('/');
    }
}