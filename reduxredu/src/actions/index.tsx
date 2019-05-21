import * as constants from "../constants";
import { Action } from "redux";
import { IWord } from "../types";

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface AddWord extends ActionWithPayload<IWord> {
  type: constants.ADD_WORD;
  payload: IWord;
}

export type WordAction = AddWord; // | OtherActionInterfaces

export function AddWord(word: IWord): AddWord {
  return { type: constants.ADD_WORD, payload: word };
}
