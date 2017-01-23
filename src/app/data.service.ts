import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  httpSiapMakan(){
    return this.http.get('http://localhost:8000/makanan-siap-makan/?format=json').map(
      (res) => res.json()
    );
  }
}