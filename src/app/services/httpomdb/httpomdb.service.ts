import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const BASE_URL = 'https://www.omdbapi.com';
const API_KEY = environment.OMDB_API_KEY;
//https://www.omdbapi.com?apikey=fe486a03&s=Batman
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private http = inject(HttpClient);
  constructor() { }
  getMovie(title: string): Observable<any> {
    return this.http
      .get<any>(`${BASE_URL}?apikey=${API_KEY}&s=${title}`)
      .pipe(
        delay(1000) //Simulación de retardo
      );
  }
}
