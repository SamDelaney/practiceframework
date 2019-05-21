import { WordAction } from "../actions";
import { StoreState } from "../types/index";
import { ADD_WORD } from "../constants/index";
import { Action } from "react-redux/node_modules/redux";

export function rootReducer(state: StoreState | undefined, action: Action) {
  if (state == undefined) return InitializeStore(state, action);
  else return wordReducer(state, action as WordAction);
}

function InitializeStore(state: undefined, action: Action): StoreState {
  return { words: [], languageName: "TestLanguageName" };
}

function wordReducer(state: StoreState, action: WordAction): StoreState {
  switch (action.type) {
    case ADD_WORD:
      return {
        ...state,
        words: state.words.concat(action.payload)
      };
    default:
      return state;
  }
}

function otherReducer(state: StoreState, action: WordAction): StoreState {
  return state;
}
