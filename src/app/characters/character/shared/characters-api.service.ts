import { CharacterTypeActions } from './../../store/characters.actions';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as fromApp from '../../../store/app.reducer';
import * as CharactersActions from '../../store/characters.actions';
@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  PUBLIC_KEY = '541f825fa0e5d365acc75e2be6198a75';
  HASH = 'a4acf4f486cde92f0460bbab72c38e96';
  URL_API = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  constructor(private http: HttpClient,
              private store: Store<fromApp.AppState>) {}

getAllCharacters(): Observable<any> {
    return this.http
      .get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results),
      tap(data => {
        this.store.dispatch(new CharactersActions.SetCharacters(data));
      }));
  }
}
