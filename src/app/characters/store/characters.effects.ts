import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as CharacterActions from './characters.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class  CharactersEffects {
  PUBLIC_KEY = '541f825fa0e5d365acc75e2be6198a75';
  HASH = 'a4acf4f486cde92f0460bbab72c38e96';
  URL_API = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  @Effect()
  getCharacters = this.actions$.pipe(
    ofType(CharacterActions.SET_CHARACTERS),
    switchMap((characterData: CharacterActions.SetCharacters) => {
      return this.http
      .get<any>(this.URL_API)
      .pipe( map((data: any) => {
        // return (data.data.results); }),
        return (new CharacterActions.SetCharacters(data.data.results)); }),
        catchError(error => {
        return of();
      }));
    }),
  );

  @Effect()
  fetchCharacters = this.actions$.pipe(ofType(CharacterActions.FETCH_CHARACTERS),
  switchMap(() => {
    return this.http
    .get<any>(this.URL_API)
  }),
  map((data: any) => {
    return (data.data.results); }),
  map(data => {
    return new CharacterActions.SetCharacters(data);
  })
  );
  constructor(private actions$: Actions, private http: HttpClient) {}
}
