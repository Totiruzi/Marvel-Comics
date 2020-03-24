import * as CharactersAction from './characters.actions';

export interface State {
  characters: any;
}
const initialState: State = {
  characters: []
};
export function charactersReducer( state = initialState, action: CharactersAction.CharacterTypeActions) {
  switch (action.type) {
    case CharactersAction.SET_CHARACTERS :
      return {
        ...state,
        characters: [...action.payload]
      };
    default:
    return state; }
}

