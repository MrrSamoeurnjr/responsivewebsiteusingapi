import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor( private http: HttpClient){}
  private newappleApi ='https://newsapi.org/v2/everything?q=apple&from=2024-04-27&to=2024-04-27&sortBy=popularity&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2';
  private newtestlaApi = 'https://newsapi.org/v2/everything?q=tesla&from=2024-03-29&sortBy=publishedAt&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2';
  private newbusinessApi = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2';
  private newtechcrunchApi = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2';
  private newdomainApi = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2'
  getApplenewapiservice():Observable<any>
  {
    return this.http.get(this.newappleApi);
  } 
  getTestalnewapiservice(): Observable<any>
  {
    return this.http.get(this.newtestlaApi);
  }
  getBusinessapiservicce():Observable<any>
  {
    return this.http.get(this.newbusinessApi)
  }
  getTechcrunchapiservice():Observable<any>
  {
    return this.http.get(this.newtechcrunchApi)
  } 
  getDomainapiservice():Observable<any>
  { 
    return this.http.get(this.newdomainApi)
  }
}
