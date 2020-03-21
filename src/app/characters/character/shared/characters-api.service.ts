import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  PUBLIC_KEY = '541f825fa0e5d365acc75e2be6198a75';
  HASH = 'a4acf4f486cde92f0460bbab72c38e96';
  URL_API = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<any> {
    return this.http
      .get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results));
  }
}
