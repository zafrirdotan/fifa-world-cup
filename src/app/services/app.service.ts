import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient ) { 

    this.http.get('assets/fifa-world-cup-2018.csv', {responseType: 'text'})
    .subscribe(
        data => {
            console.log(data);
        },
        error => {
            console.log(error);
        }
    );
  }
}
