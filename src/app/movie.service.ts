import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { pluck, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) {

  }

  getMovies(){
    return this.http.get("http://localhost:3000/movies")
    .pipe(
      pluck("data"),
      tap(response => {
        console.log(response)
      })
    );
  }

}