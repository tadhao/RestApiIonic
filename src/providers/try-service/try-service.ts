//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IfObservable } from 'rxjs/observable/IfObservable';

/*
  Generated class for the TryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TryServiceProvider {
  url: string= "https://simplifiedcoding.net/demos/marvel/";
 

  constructor( private http: Http) {
    console.log('Hello TryServiceProvider Provider');
    
  }
  myUrlCall(){
   return this.http.get(this.url)
   .do((res:Response)=> console.log(res))
   .map((res:Response)=> res.json())
   .catch(this.errorCatch);
  }
  errorCatch(error: Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "Server error");
  }

}
