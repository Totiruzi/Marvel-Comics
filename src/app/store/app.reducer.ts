import { ActionReducerMap } from '@ngrx/store';
import * as fromCharacters from '../characters/store/characters.reducer';

export interface AppState {
  characters: fromCharacters.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  characters: fromCharacters.charactersReducer
};

