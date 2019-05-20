import * as constants from "../constants";
import { Action } from "redux";

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface AddVern extends ActionWithPayload<string> {
  type: constants.ADD_VERN;
  payload: string;
}

export type WordAction = AddVern; // | OtherActionInterfaces

export function AddVern(text: string): AddVern {
  return { type: constants.ADD_VERN, payload: text };
}
