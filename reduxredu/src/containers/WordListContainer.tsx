import { connect } from "react-redux";

import WordList from "../components/WordList";
import { StoreState } from "../types/index";

export function mapStateToProps({ words }: StoreState) {
  return {
    words
  };
}

export default connect(mapStateToProps)(WordList);
