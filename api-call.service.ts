import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  url="http://jsonplaceholder.typicode.com/todos";

  constructor(private httpClient: HttpClient) {
  }

 getAPI() {
       return this.httpClient.get(this.url);

  }
}
