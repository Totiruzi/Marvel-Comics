import { Action } from '@ngrx/store';

export const SET_CHARACTERS = '[Characters] Set Characters';
export const FETCH_CHARACTERS = '[Characters] Fetch Characters';

export class SetCharacters implements Action {
  readonly type = SET_CHARACTERS;
  constructor(public payload: []) {}
}

export class FetchCharacters implements Action {
  readonly type = FETCH_CHARACTERS;
}

export type CharacterTypeActions = SetCharacters;
