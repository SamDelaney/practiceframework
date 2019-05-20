import * as constants from "../constants";
import { AddVern } from ".";

it("should add vernacular form", () => {
  const text = "AddedInTesting";
  const expectedAction = {
    type: constants.ADD_VERN,
    payload: "AddedInTesting"
  };
  const fn = AddVern(text);
  expect(fn).toEqual(expectedAction);
});
