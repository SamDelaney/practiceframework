import { connect } from "react-redux";
import { Dispatch } from "react";

import EntryForm from "../components/EntryForm";
import * as actions from "../actions";
import { StoreState } from "../types/index";

export function mapStateToProps({ languageName }: StoreState) {
  return {
    name: languageName
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.WordAction>) {
  return {
    AddWord: (vern: string, gloss: string) =>
      dispatch(actions.AddWord({ vern, gloss }))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryForm);
