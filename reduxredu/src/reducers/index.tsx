import { WordAction } from "../actions";
import { StoreState } from "../types/index";
import { ADD_VERN } from "../constants/index";
import { Action } from "react-redux/node_modules/redux";

export function rootReducer(state: StoreState | undefined, action: Action) {
  if (state == undefined) return InitializeStore(state, action);
  else return wordReducer(state, action as WordAction);
}

function InitializeStore(state: undefined, action: Action): StoreState {
  return { word: "defaultword", languageName: "TypeScripts" };
}

function wordReducer(state: StoreState, action: WordAction): StoreState {
  switch (action.type) {
    case ADD_VERN:
      return { ...state, word: action.payload };
    default:
      return state;
  }
}

function otherReducer(state: StoreState, action: WordAction): StoreState {
  return state;
}
