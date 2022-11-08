import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http:HttpClient) { }


  // tophesdine new api url
  topHeadlinesNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=eb174feb0e9348c5923d1e08094aad27';
  //technews url
  techNews="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=eb174feb0e9348c5923d1e08094aad27";
  //Business news ap iurl
  businessNews= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=eb174feb0e9348c5923d1e08094aad27";


  //use tech method
  tcTechnews ():Observable<any>{
    return this._http.get(this.techNews)

  }

  tcHeadlines():Observable<any>{
    return this._http.get(this.topHeadlinesNews)

  }

  tcBuzzNews():Observable<any>{
    return this._http.get(this.businessNews)

  }
}
