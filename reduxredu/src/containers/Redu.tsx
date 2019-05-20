import { connect } from "react-redux";
import { Dispatch } from "react";

import Redu from "../components/Redu";
import * as actions from "../actions/";
import { StoreState } from "../types/index";

export function mapStateToProps({ word, languageName }: StoreState) {
  return {
    word,
    name: languageName
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.WordAction>) {
  return {
    AddVern: (text: string) => dispatch(actions.AddVern(text))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Redu);
