import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { CharactersApiService } from './character/shared/characters-api.service';
import * as fromApp from '../store/app.reducer';
import * as CharactersActions from './store/characters.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  constructor(private charactersApiService: CharactersApiService,
              private store: Store<fromApp.AppState>) {}
  allCharacters: Observable<any>;


  ngOnInit(): void {
    // this.allCharacters = this.store.select('characters');
    // this.store.select('characters');
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this.charactersApiService.getAllCharacters();
    // this.allCharacters = this.store.select('characters')
    // .pipe(map(characters => characters.characters)) ;
    // // Had an infinit call to characters when i used this dispatch below
    // // this.store.dispatch(new CharactersActions.FetchCharacters());
  }

}
