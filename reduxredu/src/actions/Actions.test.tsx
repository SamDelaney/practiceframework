import * as constants from "../constants";
import { AddWord } from ".";

it("should add vernacular form", () => {
  const newWord = { vern: "TestVern", gloss: "TestGloss" };
  const expectedAction = {
    type: constants.ADD_WORD,
    payload: { vern: "TestVern", gloss: "TestGloss" }
  };
  const fn = AddWord(newWord);
  expect(fn).toEqual(expectedAction);
});
